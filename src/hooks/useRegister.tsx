import { useDispatch } from "react-redux";
import { setSession } from "../store/session/sessionSlice";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const dispatch = useDispatch();
  const router = useRouter();

  return async (
    username: string,
    password: string,
    passwordConfirmation: string
  ) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (password !== passwordConfirmation) {
        return alert("Passwords do not match");
      }

      if (!response.ok) {
        return alert("Registration failed.");
      }

      const data = await response.json();
      console.log(data);

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
