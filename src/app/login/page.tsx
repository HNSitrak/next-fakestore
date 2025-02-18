'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import api from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  // we use the router to navigate to other pages from next/navigation package instead of Link component from next/link
  const router = useRouter();
  const [username, setUsername] = React.useState("mor_2314");
  const [password, setPassword] = React.useState("83r5^_");

  const auth = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await api.post("/auth/login", { username, password });

    console.log(result?.token);

    auth?.login(result?.token);
    router.push("/dashboard");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <form onSubmit={(e: React.FormEvent) => handleSignIn(e)} className="flex flex-col gap-4">
        <Card className="flex flex-col gap-4">
          <CardHeader className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">Sign in</h1>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button className="w-full" type="submit">
            Sign
          </Button>
          </CardContent>
        </Card>
        </form>
      </main>
    </div>
  );
};

export default LoginPage;
