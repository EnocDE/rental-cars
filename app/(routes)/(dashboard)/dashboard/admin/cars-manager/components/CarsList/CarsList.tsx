import type { Car } from "@prisma/client"
import CarCard from "./CarCard/CarCard"

interface CarsListProps {
  cars: Car[]
}

export default function CarsList(props: CarsListProps) {
  const { cars } = props
  return (
    <div className="grid sm:grid-cols-2 gap-6 my-4 lg:grid-cols-3">
      {
        cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))
      }
    </div>
  )
}
