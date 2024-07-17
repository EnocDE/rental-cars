import Navbar from "@/components/shared/Navbar/Navbar";
import { db } from "@/lib/db";
import HeaderCars from "./components/HeaderCars/HeaderCars";
import FiltersAndCarList from "./components/FiltersAndCarList/FiltersAndCarList";

export default async function Page() {
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
      <Navbar />
      <div className="mx-auto p-6 max-w-7xl">
        <HeaderCars />

        <FiltersAndCarList cars={cars} />
      </div>
    </div>
  );
}
