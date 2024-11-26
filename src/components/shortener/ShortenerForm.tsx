"use client";

import useShortener from "@/src/hooks/useShortener";
import { RootState } from "@/src/store/store";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

export default function ShortenerForm() {
  const [url, setURL] = useState("");

  const session = useSelector((state: RootState) => state.session);
  const shorten = useShortener();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!session.username) {
      alert("Log in to short a link");
      return;
    }

    await shorten(url);
    setURL("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-2 bg-veryDarkBlue border border-lightGrayishBlue p-2 rounded-large text-base w-[680px]"
    >
      <FontAwesomeIcon width={25} height={28} icon={faLink} className="ml-2" />
      <input
        type="text"
        placeholder="Enter the link here"
        className="bg-transparent outline-none w-[450px] caret-intenseOrange"
        value={url}
        onChange={(e) => setURL(e.target.value)}
      />
      <button
        type="submit"
        className="bg-greenish hover:bg-opacity-80 rounded-large px-6 py-5 text-black font-semibold"
      >
        Shorten Now!
      </button>
    </form>
  );
}
