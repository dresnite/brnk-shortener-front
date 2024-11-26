import { useDispatch } from 'react-redux';
import { addLink } from '../store/session/sessionSlice';

export default function useShortener() {
    const dispatch = useDispatch()
    
    return async (url: string) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/shorten", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem(`jwt`)}`,
              },
              body: JSON.stringify({
                url,
              }),
            });
      
            if (!response.ok) {
              return alert("Couldn't shorten the link (Is it a valid link?)");
            }
      
            const data = await response.json();
      
            alert("Successfully shortened link");

            dispatch(addLink({
              ...data.link,
              visit_count: 0
            }));
          } catch (error) {
            alert((error as any).message);
          }
    }
}