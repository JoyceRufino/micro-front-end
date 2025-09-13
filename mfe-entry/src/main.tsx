import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EntryPage from "./EntryPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EntryPage />
  </StrictMode>
);
