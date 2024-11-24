import { AxiosError } from "@/lib/definition";
import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import { themeChange } from "theme-change";

export function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-6 rounded-lg bg-red-100 text-red-800 border border-red-300 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Something went wrong:</h2>
      <p className="text-lg mb-2">{error.message}</p>
      <pre className="bg-slate-800 p-4 rounded-md overflow-auto text-sm text-slate-50 border border-red-200">
        {error.stack}
      </pre>
    </div>
  );
}

export default function ErrorPage() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  const error = useRouteError() as AxiosError;
  console.error(error.response?.data);

  return (
    <main className="bg-base-100 flex flex-col items-center h-screen justify-center  w-full">
      <h1 className="">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </main>
  );
}
