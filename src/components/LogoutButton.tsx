"use client";

import { useAuth } from "@/lib/auth";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <Button onClick={logout} variant={"ghost"}>
      Logout
      <LogOut />
    </Button>
  );
}