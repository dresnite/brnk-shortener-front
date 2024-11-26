export enum RedirectResult {
    NotFound,
    PageExpired,
    Success,
    UnknownError,
}

export default function useRedirect() {
    return async (shortCode: string) => {
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/links/" + shortCode, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            if(response.status === 404) {
                return RedirectResult.NotFound;
            }

            if(response.status === 410) {
                return RedirectResult.PageExpired;
            }
      
            if (!response.ok) {
                alert("Internal error: " + response.status);
                return RedirectResult.UnknownError;
            }

            const data = await response.json();

            window.location.href = data.url;

            return RedirectResult.Success;
          } catch (error) {
            alert((error as any).message);
          }
    }
}