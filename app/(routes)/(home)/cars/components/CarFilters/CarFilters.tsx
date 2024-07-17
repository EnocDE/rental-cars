import CarClearButtonFilters from "./CarClearButtonFilters/CarClearButtonFilters";
import CarEngineFilter from "./CarEngineFilter/CarEngineFilter";
import CarSeatsFilter from "./CarSeatsFilter/CarSeatsFilter";
import CarTransmissionFilter from "./CarTransmissionFilter/CarTransmissionFilter";
import CarTypeFilter from "./CarTypeFilter/CarTypeFilter";

interface CarFiltersProps {
  handleFilterChange: ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => void;
  handleClearFilters: () => void;
  filters: FiltersI
}

export default function CarFilters(props: CarFiltersProps) {
  const { handleClearFilters, handleFilterChange, filters } = props;
  return (
    //TODO: Refactorizar para crear un componente reutilizable
    <div className="flex gap-3 flex-wrap mt-5 mb-8">
      <CarTypeFilter handleFilterChange={handleFilterChange} filters={filters} />
      <CarTransmissionFilter handleFilterChange={handleFilterChange} filters={filters} />
      <CarEngineFilter handleFilterChange={handleFilterChange} filters={filters} />
      <CarSeatsFilter handleFilterChange={handleFilterChange} filters={filters} />
      <CarClearButtonFilters handleClearFilters={handleClearFilters} />
    </div>
  );
}
