"use client";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavButton from "./NavButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { clearSession } from "@/src/store/session/sessionSlice";
import useLogOut from '@/src/hooks/useLogOut';

export default function AuthButtons() {
  const session = useSelector((state: RootState) => state.session);
  const logout = useLogOut();

  if (session.username) {
    return <NavButton onClick={logout}>Log out</NavButton>;
  }

  return (
    <div className="flex gap-5">
      <NavButton
        href="/login"
        className="flex gap-2 items-center bg-softCyanGray bg-opacity-20 hover:bg-opacity-30 border border-softCyanGray"
      >
        Login
        <FontAwesomeIcon icon={faRightToBracket} width={20} height={28} />
      </NavButton>

      <NavButton href="/register" className="hover:bg-opacity-90">
        Register Now
      </NavButton>
    </div>
  );
}
