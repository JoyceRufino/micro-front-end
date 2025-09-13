// app-shell/src/App.tsx
import React, { Suspense } from "react";

// React.lazy para carregar módulos remotos dinamicamente
const ClientsPage = React.lazy(() => import("mfe_clients/ClientsPage"));
const EntryPage = React.lazy(() => import("mfe_entry/EntryPage"));

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>App Shell</h1>

      <Suspense fallback={<div>Carregando componentes remotos...</div>}>
        <div style={{ marginBottom: 20 }}>
          <h2>Clients Page</h2>
          <ClientsPage />
        </div>

        <div>
          <h2>Entry Page</h2>
          <EntryPage />
        </div>
      </Suspense>
    </div>
  );
}
