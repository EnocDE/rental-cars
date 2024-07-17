import { useFavoritesStore } from "@/store/useFavoritesStore";
import { formatPrice } from "@/utils/helpers";
import { useAuth } from "@clerk/nextjs";
import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import Image from "next/image";
import IconWithText from "../IconWithText/IconWithText";
import ModalAddReserve from "../ModalAddReserve/ModalAddReserve";
import ReserveButtonForLoggedOutUsers from "../ReserveButtonForLoggedOutUsers/ReserveButtonForLoggedOutUsers";

interface CarReservationViewProps {
  car: Car;
}

export default function CarReservationView(props: CarReservationViewProps) {
  const { car } = props;
  const { priceDay, photo, id, engine, name, people, transmission, type, cv } =
    car;
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const favorites = useFavoritesStore((state) => state.favorites);

  const handleAddToFavorites = (car: Car) => addToFavorites(car);
  const isFavorite = favorites.find((item) => item.id === car.id);

  const { userId } = useAuth();

  return (
    <article
      key={id}
      className="flex flex-col shadow-md hover:shadow-lg p-1 border rounded-lg transition-shadow"
    >
      <div className="w-full h-auto aspect-video">
        <Image
          src={photo}
          alt={`${name} image`}
          width={500}
          height={500}
          className="rounded-lg w-full object-cover"
          priority
        />
      </div>
      <div className="flex flex-col p-3 h-full">
        <div className="flex flex-col flex-1 gap-x-4 mb-3">
          <p className="mb-5 font-bold text-xl">{name}</p>
        </div>
        <p className="font-medium">{formatPrice(priceDay)} MXN/day</p>
        <IconWithText icon={Gem} text={type} />
        <IconWithText icon={Wrench} text={transmission} />
        <IconWithText icon={Users} text={people} />
        <IconWithText icon={Fuel} text={engine} />
        <IconWithText icon={Gauge} text={cv} />
        {userId
          ? (
            <div className="flex justify-center items-center gap-3">
              <ModalAddReserve car={car} />
              <Heart
                className={`mt-2 cursor-pointer transition ${
                  isFavorite ? "fill-black scale-125" : ""
                }`}
                onClick={() => handleAddToFavorites(car)}
              />
            </div>
        ) 
          : <ReserveButtonForLoggedOutUsers />}
      </div>
    </article>
  );
}
