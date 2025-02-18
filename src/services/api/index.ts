import Configs from "@/configs";
import axios, { AxiosRequestConfig } from "axios";

// add session to the request headers, I mean Beaarer token
const apiConfig = axios.create({
  baseURL: Configs.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
apiConfig.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log("request", Configs.API_URL, config);

    return config;
  },
  (error) => {
    // Do something with request error
    console.log("error request", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiConfig.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response", response);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("error response", error?.config);
    return Promise.reject(error);
  }
);

// the default export is the apiConfig instance
export const api = {
  get: async (url: string, config?: AxiosRequestConfig<unknown> | undefined) => {
    const response = await apiConfig.get(url, config);
    return response.data;
  },
  post: async (url: string, data: unknown, config?: AxiosRequestConfig<unknown> | undefined) => {
    const response = await apiConfig.post(url, data, config);
    return response.data;
  },
  put: async (url: string, data: unknown, config?: AxiosRequestConfig<unknown> | undefined) => {
    const response = await apiConfig.put(url, data, config);
    return response.data;
  },
  delete: async (url: string, config?: AxiosRequestConfig<unknown> | undefined) => {
    const response = await apiConfig.delete(url, config);
    return response.data;
  },
};

export default api;
