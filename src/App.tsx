import { CivicAuthProvider } from "@civic/auth/react";
import Dashboard from "./components/Dashboard";

const civicClientId = import.meta.env.VITE_CIVIC_CLIENT_ID;

function App() {
  return (
    <CivicAuthProvider clientId={civicClientId}>
      <Dashboard />
    </CivicAuthProvider>
  );
}

export default App;
