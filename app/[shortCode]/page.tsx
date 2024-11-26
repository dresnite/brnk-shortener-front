"use client";

import useRedirect, { RedirectResult } from "@/src/hooks/useRedirect";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ShortCodePage() {
  const redirect = useRedirect();
  const pathname = usePathname();

  const pathWithoutSlash = pathname.startsWith("/")
    ? pathname.substring(1)
    : pathname;

  const [message, setMessage] = useState("Redirecting");
  
  useEffect(() => {
    (async () => {
      const redirectResult = await redirect(pathWithoutSlash);

      switch (redirectResult) {
        case RedirectResult.PageExpired:
          setMessage("This link has expired");
          break;
        case RedirectResult.NotFound:
          setMessage("Page not found");
          break;
        case RedirectResult.UnknownError:
          setMessage("Something went wrong...");
          break;
      }
    })();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl">{message}</h1>
    </div>
  );
}
