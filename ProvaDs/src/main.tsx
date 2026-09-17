import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import { BicicletaProvider } from "./BicicletaContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BicicletaProvider>
      <App />
    </BicicletaProvider>
  </StrictMode>
);