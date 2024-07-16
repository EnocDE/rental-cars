"use client";
import CarReservationView from "@/components/shared/CarReservationView/CarReservationView";
import { Car } from "@prisma/client";

interface CarListProps {
  cars: Car[];
}

export default function CarList(props: CarListProps) {
  const { cars } = props;

  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cars.map((car) => (
        <CarReservationView key={car.id} car={car} />
      ))}
    </section>
  );
}
