import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import MainCarCategoryItem from "./MainCarCategoryItem/MainCarCategoryItem";
import MainCarItem from "./MainCarItem/MainCarItem";
import { DataCarsCategory, FirstCarList, SecondCarList } from "./MainCars.data";

export default function MainCars() {
  return (
    <div className="place-items-center grid mx-auto py-12 lg:py-40 p-6 max-w-6xl text-center">
      <h3 className="font-bold text-2xl lg:text-6xl">Our Vehicles</h3>
      <p className="mx-auto mt-2 lg:mt-5 mb-5 lg:mb-10 w-full max-w-2xl text-center text-xl lg:text-xl">
        Do not deny yourself pleasure of driving the best premium cars from
        around the world.
      </p>

      <div className="justify-center items-center gap-4 grid grid-cols-2 lg:grid-cols-6 mx-auto mb-5 max-w-2xl">
        {DataCarsCategory.map((category) => (
          <MainCarCategoryItem key={category.name} category={category} />
        ))}
      </div>

      <div className="space-y-6 mb-10">
        <div className="justify-center items-center gap-6 grid sm:grid-cols-3">
          {FirstCarList.map((car) => (
            <MainCarItem key={car.url} car={car} />
          ))}
        </div>
        <div className="gap-6 grid sm:grid-cols-4 mx-auto">
          {SecondCarList.map((car) => (
            <MainCarItem key={car.url} car={car} />
          ))}
        </div>
      </div>

      <Link href={"/cars"}>
        <Button
          className="flex gap-2 p-6 rounded-xl text-lg"
          variant={"outline"}
        >
          Show all models
          <MoveRight />
        </Button>
      </Link>
    </div>
  );
}
