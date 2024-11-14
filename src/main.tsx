import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import root from "@/routes/root";
import { ErrorFallback } from "@/routes/Error";
import { ThemeProvider } from "@/components/theme-provider";

import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RouterProvider future={{ v7_startTransition: true }} router={root} />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>
);
