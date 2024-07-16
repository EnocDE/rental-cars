import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

interface SliderItemProps {
  brand: BrandsDataI;
}

export default function SliderItem(props: SliderItemProps) {
  const { brand: brandInfo } = props;
  const { brand, url } = brandInfo;
  
  return (
    <CarouselItem className="basis-4/12 sm:basis-2/6 lg:basis-1/5">
      <Image
        src={`/images/brands/${url}`}
        alt={`${brand} brand image`}
        width={90}
        height={90}
        className="mx-auto aspect-square object-contain"
      />
    </CarouselItem>
  );
}
