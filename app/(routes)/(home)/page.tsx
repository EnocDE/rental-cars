import Navbar from "@/components/shared/Navbar/Navbar";
import SliderBrands from "./components/SliderBrands/SliderBrands";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import MainCars from "./components/MainCars/MainCars";
import DriveToday from "./components/DriveToday/DriveToday";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SliderBrands />
      <Features />
      <MainCars />
      <DriveToday />
    </div>
  );
}
