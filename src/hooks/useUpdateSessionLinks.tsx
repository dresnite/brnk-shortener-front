import { useDispatch } from "react-redux";
import { setLinks } from "../store/session/sessionSlice";

export default function useUpdateSessionLinks() {
  const dispatch = useDispatch();

  return async () => {
    if (
      !localStorage.getItem("jwt") ||
      localStorage.getItem("jwt")?.length === 0
    ) {
      return;
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/links", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      });

      if (!response.ok) {
        return alert(
          "Error while loading links. " +
            localStorage.getItem("jwt") +
            response.status
        );
      }

      const data = await response.json();

      dispatch(setLinks(data.links));
    } catch (error) {
      alert((error as any).message);
    }
  };
}
