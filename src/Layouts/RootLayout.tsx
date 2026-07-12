import { Button } from "@/components/ui/button"
import { Link, Outlet } from "react-router"

export default function RootLayout() {
  return (
    <div>
      <div className="m-4 h-16 w-full">
        <Link to="/products">
          <Button>Products</Button>
        </Link>
      </div>
      <Outlet />
      <div className="m-4 h-16 w-full">Footer</div>
    </div>
  )
}
