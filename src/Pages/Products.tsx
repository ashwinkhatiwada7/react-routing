import { axiosInstance } from "@/lib/axios"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Products() {
  type Product = {
    id: number
    thumbnailUrl: string
    ablumId: number
    title: string
    url: string
  }
  const [products, setProducts] = useState<Product[]>([])

  const getProducts = async () => {
    const response = await axiosInstance.get("/photos")

    if (response.status === 200) {
      setProducts(response.data)
    }
  }

  useEffect(() => {
    getProducts()
  })
  return (
    <div>
      this is products page
      {products.length > 0 ? (
        products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="flex min-w-60 flex-col items-center justify-center gap-2 rounded-md border-2 border-gray-300 p-2">
              <img
                src={product.thumbnailUrl}
                alt={product.title}
                className="h-30 w-30"
              />
              <h2>{product.title}</h2>
            </div>
          </Link>
        ))
      ) : (
        <div>no products found</div>
      )}
    </div>
  )
}
