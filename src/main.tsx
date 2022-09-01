import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const mount = () => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (process.env.NODE_ENV === "development") {
  import("./mocks/browser").then((mod) => mod.worker.start()).then(mount);
} else {
  mount();
}
