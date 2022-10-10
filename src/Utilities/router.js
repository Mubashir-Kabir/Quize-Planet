import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "./Root";
import Statistics from "../Pages/Statistics";
import Blog from "../Pages/Blog";
import Error from "../Pages/Error";
import Quiz from "../Pages/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/quiz/:id",
        loader: ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz></Quiz>,
      },
    ],
  },
]);

export default router;
