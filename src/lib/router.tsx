import RootLayout from "@/Layouts/RootLayout"
import About from "@/Pages/About"
import Login from "@/Pages/auth/Login"
import Signup from "@/Pages/auth/Signup"
import Home from "@/Pages/Home"
import ProductDetails from "@/Pages/ProductDetails"
import Products from "@/Pages/Products"
import { createBrowserRouter } from "react-router"

function createAppRouter() {
  return createBrowserRouter([
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

          Component: Products,
        },
        {
          path: "products/:id",
          Component: ProductDetails,
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
}

const hot = import.meta.hot

export const router = hot?.data?.router ?? createAppRouter()

if (hot) {
  hot.data.router = router
}
