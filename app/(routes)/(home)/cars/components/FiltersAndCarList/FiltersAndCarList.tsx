"use client";
import { Car } from "@prisma/client";
import { useEffect, useState } from "react";
import CarList from "../CarList/CarList";
import CarFilters from "../CarFilters/CarFilters";

interface FiltersAndCarListProps {
  cars: Car[];
}

export default function FiltersAndCarList(props: FiltersAndCarListProps) {
  const { cars } = props;
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({
    type: "",
    transmission: "",
    engine: "",
    people: "",
  });

  useEffect(() => {
    const filterKeys = Object.keys(filters) as Array<keyof typeof filters>;

    const filtered = cars.filter((car) => {
      return filterKeys.every((key) => {
        const filterValue = filters[key].toLowerCase();
        const carValue = car[key].toLowerCase();

        if (!filterValue) return true

        return carValue === filterValue;
      });
    });

    setFilteredCars(filtered);
  }, [filters, cars]);

  const handleFilterChange = ({name, value}: {name: string, value: string}) => {
    setFilters({...filters, [name]: value});
  };

  const handleClearFilters = () => {
    setFilters({
      type: "",
      transmission: "",
      engine: "",
      people: "",
    });
  };

  return (
    <>
      <CarFilters handleClearFilters={handleClearFilters} handleFilterChange={handleFilterChange} filters={filters}/>
      <CarList cars={filteredCars} />
    </>
  );
}
