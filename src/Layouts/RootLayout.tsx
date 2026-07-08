import { Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div>
      <div className="m-4 h-16 w-full bg-red-500">Navbar</div>
      <Outlet />
      <div className="m-4 h-16 w-full bg-red-500">Footer</div>
    </div>
  )
}
