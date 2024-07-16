"use client"
import { toast } from "@/components/ui/use-toast"
import { Car } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"

interface CarCardPublishStatusProps {
  published: Car['published']
  id: Car["id"]
}

export default function CarCardPublishStatus(props: CarCardPublishStatusProps) {
  const { id, published } = props
  const router = useRouter()

  const handleClickPublished = async () => {
    await axios.patch(`/api/car/${id}`, { published: !published })
    toast({
      title: "Status updated successfully."
    })
    router.refresh()
  }

  return (
    <p
      className={`absolute top-0 right-0 w-full p-1 text-center text-white font-semibold ${published ? "bg-green-500" : "bg-red-500"} cursor-pointer select-none`}
      onClick={handleClickPublished}
    >
      {published ? "Published" : "Not published"}
    </p>
  )
}
