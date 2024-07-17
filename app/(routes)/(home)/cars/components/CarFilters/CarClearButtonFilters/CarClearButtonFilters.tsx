import { Button } from "@/components/ui/button";

interface CarClearButtonFiltersProps {
  handleClearFilters: () => void
}

export default function CarClearButtonFilters(props: CarClearButtonFiltersProps) {
  const { handleClearFilters } = props;
  return (
    <div>
      <Button onClick={handleClearFilters}>Reset filters</Button>
    </div>
  );
}
