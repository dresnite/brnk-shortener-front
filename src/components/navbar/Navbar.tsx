"use client";

import NavButton from "./NavButton";
import AuthButtons from "./AuthButtons";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const redirectToHomepage = () => {
    router.push("/");
  };

  return (
    <nav className="px-11 pt-10 flex justify-between items-center">
      <div className="flex gap-1">
        <h1
          onClick={redirectToHomepage}
          className="text-intenseOrange font-extrabold text-4xl hover:cursor-pointer"
        >
          BRNK
        </h1>
        <span className="font-light text-white opacity-50 text-sm">®</span>
      </div>

      {pathname === "/login" || pathname == "/register" ? (
        <NavButton href="/">Go back</NavButton>
      ) : (
        <AuthButtons />
      )}
    </nav>
  );
}
