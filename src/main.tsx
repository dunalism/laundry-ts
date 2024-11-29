import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import root from "@/routes/root";
import { ErrorFallback } from "@/routes/Error";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./lib/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider future={{ v7_startTransition: true }} router={root} />
        <ToastContainer pauseOnHover={false} />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
