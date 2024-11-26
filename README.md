### BRNK

BRNK is a URL shortener created as part of a technical assessment for The Brink Agency. Try the live preview at [thebr.ink](https://thebr.ink).

#### Tech stack

- Backend: Laravel (PHP)
- Frontend: Next.js (TypeScript)
- Database: MySQL

#### Installation

1. Install the packages

```
npm install --legacy-peer-deps
```

Then, set the corresponding environment variables

```
# NEXT_PUBLIC_API_URL contains that address of the backend server
NEXT_PUBLIC_API_URL=http://localhost:8000
# NEXT_PUBLIC_WEB_URL specifies the URL of the current website. It is used exclusively for display purposes.
NEXT_PUBLIC_WEB_URL=http://localhost:3000
```

Finally, run the command to the start the development server

```
npm run dev
```