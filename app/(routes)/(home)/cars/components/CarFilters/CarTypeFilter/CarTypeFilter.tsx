import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarTypeFilterProps {
  handleFilterChange: ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => void;
  filters: FiltersI
}

export default function CarTypeFilter(props: CarTypeFilterProps) {
  const { handleFilterChange, filters } = props;
  
  return (
    <div>
      <Select
        onValueChange={(value) => handleFilterChange({ name: "type", value })}
        value={filters.type}
      >
        <SelectTrigger className="w-[180px]" defaultValue={filters.type}>
          <SelectValue placeholder="Car type" className="" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select type</SelectLabel>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="coupe">Coupe</SelectItem>
            <SelectItem value="family">Family</SelectItem>
            <SelectItem value="delux">Delux</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
