import { cn } from "@/lib/utils";
import { CarsDataCategoryI } from "../MainCars.types";

interface MainCarCategoryItemProps {
  category: CarsDataCategoryI;
}

export default function MainCarCategoryItem(props: MainCarCategoryItemProps) {
  const { category } = props;
  const { active, name } = category;
  return (
    <div
      className={cn(
        "rounded-xl py-2 px-3",
        active ? "bg-black text-white" : "bg-slate-100"
      )}
    >
      {name}
    </div>
  );
}
