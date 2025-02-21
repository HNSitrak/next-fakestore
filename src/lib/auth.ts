"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  return {
    session,
    isAuthenticated,
    login: async (username: string, password: string) => {
      return await signIn("credentials", { username, password, redirect: false });
    },
    logout: () => signOut(),
  };
};
