'use client';

import api from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { IUser } from "../page";

const UserPage = () => {
  const params = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ['user', params?.userId],
    queryFn: async (): Promise<IUser> => {
      const res = await api.get(`/users/${params?.userId}`);
      return res;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>ID: {data?.id}</p>
    </div>
  );
};

export default UserPage;
