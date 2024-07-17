import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarEngineFilterProps {
  handleFilterChange: ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => void;
  filters: FiltersI
}

export default function CarEngineFilter(props: CarEngineFilterProps) {
  const { handleFilterChange, filters } = props;
  return (
    <div>
      <Select
        onValueChange={(value) => handleFilterChange({ name: "engine", value })}
        value={filters.engine}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Car engine" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select engine</SelectLabel>
            <SelectItem value="gasoil">Gasoil</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="Electric">Electric</SelectItem>
            <SelectItem value="hibrid">Hibrid</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
