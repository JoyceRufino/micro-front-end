import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ClientsPage from "./ClientsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClientsPage />
  </StrictMode>
);
