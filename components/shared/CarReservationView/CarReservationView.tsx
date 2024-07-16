import { useFavoritesStore } from "@/store/useFavoritesStore";
import { formatPrice } from "@/utils/helpers";
import { Car } from "@prisma/client";
import Image from "next/image";
import React from "react";
import IconWithText from "../IconWithText/IconWithText";
import { Fuel, Gauge, Gem, Heart, Users, Wrench } from "lucide-react";
import ModalAddReserve from "../ModalAddReserve/ModalAddReserve";

interface CarReservationViewProps {
  car: Car;
}

export default function CarReservationView(props: CarReservationViewProps) {
  const { car } = props;
  const { priceDay, photo, id, engine, name, people, transmission, type, cv } = car;
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const favorites = useFavoritesStore((state) => state.favorites);

  const handleAddToFavorites = (car: Car) => addToFavorites(car);
  const isFavorite = favorites.find((item) => item.id === car.id);

  return (
    <article
      key={id}
      className="p-1 rounded-lg shadow-md hover:shadow-lg transition-shadow border"
    >
      <div className="w-full h-auto aspect-video">
        <Image
          src={photo}
          alt={`${name} image`}
          width={500}
          height={500}
          className=" w-full rounded-lg object-cover"
          priority
        />
      </div>
      <div className="p-3">
        <div className="flex flex-col mb-3 gap-x-4">
          <p className="text-xl mb-5">{name}</p>
          <p>{formatPrice(priceDay)} MXN/day</p>
        </div>
        <IconWithText icon={Gem} text={type} />
        <IconWithText icon={Wrench} text={transmission} />
        <IconWithText icon={Users} text={people} />
        <IconWithText icon={Fuel} text={engine} />
        <IconWithText icon={Gauge} text={cv} />
        <div className="flex items-center justify-center gap-3">
          <ModalAddReserve car={car} />
          <Heart
            className={`mt-2 cursor-pointer transition ${
              isFavorite ? "fill-black scale-125" : ""
            }`}
            onClick={() => handleAddToFavorites(car)}
          />
        </div>
      </div>
    </article>
  );
}
