import LandingLayout from "@/components/layout/LandingLayout";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
