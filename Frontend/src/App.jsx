import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home.jsx";
import EmailGenerator from "./pages/EmailGenerator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/email-generator",
    element: <EmailGenerator />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
