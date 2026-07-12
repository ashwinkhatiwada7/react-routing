import { axiosInstance } from "@/lib/axios"
import axios from "axios"
import { useParams } from "react-router"

export default function ProductDetails() {
  const params = useParams()
  const id = params.id

  const getProductsDetail = async () => {
    const response = await axiosInstance.get(`/photos/${id}`)
  }
  return <div>ProductDetails</div>
}
