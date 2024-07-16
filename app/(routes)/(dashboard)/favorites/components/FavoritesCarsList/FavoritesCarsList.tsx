"use client";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import FavoriteCarView from "../FavoriteCarView/FavoriteCarView";

export default function FavoritesCarsList() {
  const favorites = useFavoritesStore((state) => state.favorites);

  return favorites.length ? (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {favorites.map((car) => (
        <FavoriteCarView key={car.id} car={car} />
      ))}
    </section>
  ) : (
    <p>You do not have any cars liked yet</p>
  );
}
