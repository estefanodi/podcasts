import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { router } from "./router";

let container = document.getElementById("app")!;
let root = createRoot(container);

root.render(<RouterProvider router={router} />);
