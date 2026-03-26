import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Counter from "../components/Counter";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    path: "/",
    children: [
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/hasmi",
        element: <h1>Hasmi</h1>,
      },
      {
        path :"/counter",
        element: <Counter/>
      },
      {
        path:"*",
        element: <h1>Not Found</h1>
      }
    ],
  },
]);

export default router;
