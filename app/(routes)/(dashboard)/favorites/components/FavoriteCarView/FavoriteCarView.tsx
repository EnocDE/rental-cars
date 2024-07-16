import CarReservationView from "@/components/shared/CarReservationView/CarReservationView";
import { Car } from "@prisma/client";

interface FavoriteCarViewProps {
  car: Car;
}

export default function FavoriteCarView(props: FavoriteCarViewProps) {
  const { car } = props;

  return (
    <CarReservationView car={car} />
  );
}
