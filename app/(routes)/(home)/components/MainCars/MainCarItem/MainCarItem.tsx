import Image from "next/image";
import { CarDataI } from "../MainCars.types";

interface MainCarItemProps {
  car: CarDataI;
}

export default function MainCarItem(props: MainCarItemProps) {
  const { car } = props;
  const { url } = car;
  return (
    <div key={url}>
      <Image
        src={`/images/${url}`}
        alt="Car Image"
        width={300}
        height={300}
        className="block mx-auto rounded-xl w-full h-full"
      />
    </div>
  );
}
