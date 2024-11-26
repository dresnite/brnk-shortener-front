"use client";

import AuthInput from "@/src/components/auth/AuthInput";
import Container from "@/src/components/Container";
import Navbar from "@/src/components/navbar/Navbar";
import NavButton from "@/src/components/navbar/NavButton";
import useLogin from "@/src/hooks/useLogin";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Container className="flex flex-col min-h-screen">
      <Navbar />

      <form
        onSubmit={handleSubmit}
        className="pb-20 flex flex-col flex-grow justify-center gap-10 items-center"
      >
        <div className="flex flex-col gap-2">
          <AuthInput
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col text-center gap-2">
          <AuthInput
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-6">
          <NavButton className="w-[450px]">Login</NavButton>
          <p className="text-center">
            Don't have an account?{" "}
            <Link href="/register" className="text-intenseOrange">
              Register now
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
