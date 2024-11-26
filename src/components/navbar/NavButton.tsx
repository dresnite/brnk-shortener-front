"use client";

import { useRouter } from "next/navigation";

interface ButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function NavButton({
  onClick,
  disabled,
  children,
  className,
  href,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={
        (disabled ? "opacity-50 " : "") +
        `text-base text-white font-semibold bg-intenseOrange rounded-large px-8 py-5 ${className}`
      }
    >
      {children}
    </button>
  );
}
