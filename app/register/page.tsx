"use client";

import AuthInput from "@/src/components/auth/AuthInput";
import Container from "@/src/components/Container";
import Navbar from "@/src/components/navbar/Navbar";
import NavButton from "@/src/components/navbar/NavButton";
import useRegister from "@/src/hooks/useRegister";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [username, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const register = useRegister();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    register(username, password, passwordConfirmation);
  };

  return (
    <Container className="flex flex-col min-h-screen">
      <Navbar />

      <form
        className="flex flex-col flex-grow justify-center gap-10 items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <AuthInput
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col text-center gap-2">
          <AuthInput
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col text-center gap-2">
          <AuthInput
            placeholder="Repeat password"
            type="password"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-6">
          <NavButton
            className="w-[450px]"
            disabled={password !== passwordConfirmation}
          >
            Register
          </NavButton>
          <p className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-intenseOrange">
              Login here
            </Link>
          </p>
        </div>
      </form>
    </Container>
  );
}
