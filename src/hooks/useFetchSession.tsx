import { useDispatch } from "react-redux";
import { setSession } from "../store/session/sessionSlice";

export default function useFetchSession() {
  const dispatch = useDispatch();

  return async () => {
    if (localStorage.getItem('jwt') && localStorage.getItem('jwt')!.length > 0) {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/user", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`
              },
            });
      
            if (response.status == 401) {
              return alert("Invalid credentials.");
            }
      
            if (response.status !== 200) {
              return alert("Internal error: " + response.status);
            }
      
            const data = await response.json();
      
            dispatch(setSession(data.user));
          } catch (error) {
            alert((error as any).message);
          }
    }
  };
}
