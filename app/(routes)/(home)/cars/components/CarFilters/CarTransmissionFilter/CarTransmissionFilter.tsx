import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CarTransmissionFilterProps {
  handleFilterChange: ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => void;
  filters: FiltersI
}

export default function CarTransmissionFilter(props: CarTransmissionFilterProps) {
  const { handleFilterChange, filters } = props;
  return (
    <div>
      <Select
        onValueChange={(value) => handleFilterChange({ name: "transmission", value })}
        value={filters.transmission}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Car transmission" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select transmission</SelectLabel>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
