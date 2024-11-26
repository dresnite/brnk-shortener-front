import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSession } from "../store/session/sessionSlice";

export default function useLogin() {
  const dispatch = useDispatch();
  const router = useRouter();

  return async (username: string, password: string) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.status == 401) {
        return alert("Invalid credentials.");
      }

      if (response.status !== 200) {
        return alert("Internal error: " + response.status);
      }

      const data = await response.json();

      // using local storage for simplicity
      localStorage.setItem("jwt", data.token);

      dispatch(setSession(data.user));

      // redirect to main page
      router.replace("/");
    } catch (error) {
      alert((error as any).message);
    }
  };
}
