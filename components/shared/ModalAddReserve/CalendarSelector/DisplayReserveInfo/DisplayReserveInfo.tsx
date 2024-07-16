import { formatPrice } from "@/utils/helpers";
import { Car } from "@prisma/client";

interface DisplayReserveInfoProps {
  days?: number
  priceDay?: Car["priceDay"]
}

export default function DisplayReserveInfo({days = 0, priceDay = "0"}: DisplayReserveInfoProps) {
  return (
    <>
      <p className="mt-4 text-lg text-black">Total days: {days}</p>
      <p className="mb-3 text-sm text-neutral-500">
        Total price: {formatPrice((days * parseInt(priceDay)).toString())} MXN
      </p>
    </>
  );
}
