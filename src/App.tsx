import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import RootLayout from "./Layouts/RootLayout"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/auth/Login"
import Signup from "./Pages/auth/SIgnup"
import Products from "./Pages/Products"
import Shoe from "./Pages/Shoe"
export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "about",
          Component: About,
        },
        {
          path: "products",
          children: [
            {
              index: true,
              Component: Products,
            },
            {
              path: "shoe",
              Component: Shoe,
            },
          ],
        },
      ],
    },
    {
      path: "login",
      Component: Login,
    },
    {
      path: "signup",
      Component: Signup,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
