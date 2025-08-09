import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Service from "./pages/Service.jsx";
import Home from "./pages/Home.jsx";
import EmailGenerator from "./pages/EmailGenerator.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/email-generator",
    element: <EmailGenerator />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/about",
    element: <About/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
