import { Button } from "@/components/ui/button"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import Reserves from "./components/Reserves/Reserves"

export default async function Page() {
  const {userId} = auth()

  if (!userId) return redirect("/")

  const orders = await db.order.findMany({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return (
    <div>
      <h1 className="mb-4 font-bold text-2xl">Car Reservations</h1>
      {
        orders.length 
          ? <Reserves orders={orders} />
          : (
            <div className="grid justify-center justify-items-center gap-3 text-center mt-20">
            <h2 className="text-lg">You do not have any reservations yet.</h2>
            <p>Do a reservation in the vehicle section</p>
            <Link href="/dashboard">
              <Button>
                Vehicle list
              </Button>
            </Link>
            </div>
          )
      }
    </div>
  )
}
