import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./rootLayout";
import Photographies from "./components/photos/photos";
import Poems from "./components/poems/Poems";
import About from "./components/about/About";
import "./App.css";
import Hero from "./components/hero/hero";
import ImageDetail from "./components/photos/imageDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        // Main routes
        { index: true, element: <Hero /> },

        {
          path: "photographies",
          element: <Photographies />,
        },

        { path: "photographies/:id", element: <ImageDetail /> },

        {
          path: "poems",
          element: <Poems />,
        },

        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <div className=" text-slate-800 ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
