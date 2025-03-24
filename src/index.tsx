import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./router";
import { AppProvider } from "./contexts/app-context";

let container = document.getElementById("app")!;
let root = createRoot(container);

root.render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
