import { create } from "zustand"
import { persist, devtools } from "zustand/middleware"
import { Car } from "@prisma/client"
import { toast } from "../components/ui/use-toast"

interface FavoritesState {
  favorites: Car[]
  addToFavorites: (car: Car) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  devtools(
    persist(
      (set, get) => ({
        favorites: [],
        addToFavorites: (car) => {
          const { favorites } = get()
          
          const itemExist = favorites.find(item => item.id === car.id)
          let newFavorites : Car[] = []

          if (itemExist) {
            newFavorites = favorites.filter(item => item.id !== car.id)
            toast({title: `${car.name} was removed from your favorites.`, variant: "destructive"})
          } else {
            newFavorites = [...favorites, car]
            toast({title: `${car.name} is now on your favorites.`})
          }

          set(() => ({
            favorites: newFavorites
          }))
        }
      }),
      { name: "favorites" }
    )
  )
)