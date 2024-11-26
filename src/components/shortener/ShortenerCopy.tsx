"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShorterForm from "./ShortenerForm";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons/faCircleQuestion";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

export default function ShortenerCopy() {
  const username = useSelector((state: RootState) => state.session.username);

  return (
    <section className="my-32 flex flex-col items-center gap-10 text-center">
      <h1 className="text-white text-6xl font-extrabold">
        {username
          ? `Welcome back, @${username}`
          : "Shorten Your Loooong Links :)"}
      </h1>
      <p className="text-base font-normal w-[680px]">
        {username
          ? "What link are you going to short today?"
          : "BRNK is an efficient and easy-to-use URL shortening service that streamlines your online experience."}
      </p>

      <ShorterForm />

      <div className="flex gap-3 items-center">
        {username ? (
          <p>
            Registered users can create{" "}
            <span className="font-bold text-intenseOrange">unlimited</span>{" "}
            links
          </p>
        ) : (
          <p>
            You can create{" "}
            <span className="font-bold text-intenseOrange">05</span> more links.{" "}
            <span>Register now to enjoy unlimited usage!</span>
          </p>
        )}

        <div className="cursor-pointer relative inline-block group">
          <FontAwesomeIcon icon={faCircleQuestion} width={14} height={28} />
          <span className="absolute left-1/2 transform -translate-x-1/2 top-6 w-40 p-2 text-sm text-white bg-black rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            {username
              ? "Abusing this perk could get your account banned."
              : "Register now to unlock features like setting custom expiration times for your links (default is 1 hour)."}
          </span>
        </div>
      </div>
    </section>
  );
}
