import { redirect } from "next/navigation";
import FavoritesCarsList from "./components/FavoritesCarsList/FavoritesCarsList";
import { auth } from "@clerk/nextjs/server";

export default function Page() {
  const { userId } = auth()

  if (!userId) return redirect("/")
  return (
    <div>
      <h1 className="text-2xl mb-5 font-bold">Cars you liked</h1>
      <FavoritesCarsList />
    </div>
  );
}
