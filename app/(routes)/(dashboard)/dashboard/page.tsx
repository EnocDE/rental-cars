import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CarList from "./components/CarList/CarList";

export default async function Page() {
  const { userId } = auth();

  if (!userId) redirect("/");

  const cars = await db.car.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-5">Car list</h2>
      </div>
      <CarList cars={cars} />
    </div>
  );
}
