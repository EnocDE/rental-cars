import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarSeatsFilterProps {
  handleFilterChange: ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => void;
  filters: FiltersI
}

export default function CarSeatsFilter(props: CarSeatsFilterProps) {
  const { handleFilterChange, filters } = props;
  return (
    <div>
      <Select
        onValueChange={(value) => handleFilterChange({ name: "people", value })}
        value={filters.people}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Car seats" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select seats</SelectLabel>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
            <SelectItem value="6">6</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
