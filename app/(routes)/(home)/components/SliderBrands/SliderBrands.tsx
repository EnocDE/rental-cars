"use client";
import Reveal from "@/components/shared/Reveal/Reveal";
import {
  Carousel,
  CarouselContent
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SliderItem from "./SliderItem/SliderItem";
import { brandsData } from "./SliderBrands.data";

export default function SliderBrands() {
  return (
    <Reveal
      position="bottom"
      className="flex gap-20 justify-center lg:pb-20 mt-5 mb-10"
    >
      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex items-center">
          {brandsData.map((brand) => (
            <SliderItem key={brand.brand} brand={brand} />
          ))}
        </CarouselContent>
      </Carousel>
    </Reveal>
  );
}
