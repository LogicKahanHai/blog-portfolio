import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import * as Components from "./components/components.tsx";
import "./index.css";
import * as Pages from "./pages/pages.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Components.ErrorPage />,
    children: [
      {
        index: true,
        element: <Pages.Home />,
        // errorElement: <Components.ErrorPage />,
      },
      // { path: "about", element: <Pages.About /> },
      // { path: "contact", element: <Pages.Contact /> },
      { path: "projects/:projectId", element: <Pages.ProjectPage /> },
    ],
  },
  {
    path: "*",
    element: <Components.ErrorPage />,
  }
]);

if (!import.meta.env.DEV) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
