import { useDispatch } from "react-redux";
import { clearSession } from "../store/session/sessionSlice";

export default function useLogOut() {
  const dispatch = useDispatch();

  return async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      });

      if (!response.ok) {
        return alert("Registration failed.");
      }

      const data = await response.json();
      console.log(data);

      localStorage.removeItem("jwt");

      dispatch(clearSession());
    } catch (error) {
      alert((error as any).message);
    }
  };
}
