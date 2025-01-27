import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/src/styles/globals.css";
import StoreProvider from "@/src/components/redux/StoreProvider";

export const metadata: Metadata = {
  title: "BRNK",
  description: "The ultimate URL shortener",
};

const inter = Inter({
  weight: ["300", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
