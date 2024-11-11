import LoginForm from "./pages/Login";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error }: { error: Error }) {
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

function App() {
  return (
    <>
      <div className="">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <p>haidd</p>

          <p>haai</p>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
