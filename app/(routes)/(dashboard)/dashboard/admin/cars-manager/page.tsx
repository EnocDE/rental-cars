import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddCarButton from "./components/AddCarButton/AddCarButton";
import CarsList from "./components/CarsList/CarsList";

export default async function Page() {
  const { userId } = auth()

  if (!userId) {
    return redirect("/")
  }

  const cars = await db.car.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc"
    }
  })

return (
  <div>
    <div className="flex justify-between flex-wrap gap-5 mb-10 sm:mb-0">
      <h2 className="text-2xl font-bold">Car Manager</h2>
      <AddCarButton />
    </div>
    <CarsList cars={cars} />
  </div>
)
}
