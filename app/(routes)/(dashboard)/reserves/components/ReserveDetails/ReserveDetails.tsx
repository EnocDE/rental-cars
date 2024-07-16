import { TableCell, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/utils/helpers";
import { Order } from "@prisma/client";

interface ReserveDetailsProps {
  order: Order;
}

export default function ReserveDetails(props: ReserveDetailsProps) {
  const { order } = props;
  const { carName, orderDate, status, totalAmount, orderEndDate } = order;
  return (
    <TableRow>
      <TableCell>{carName}</TableCell>
      <TableCell>{orderDate.toLocaleDateString()}</TableCell>
      <TableCell>{orderEndDate.toLocaleDateString()}</TableCell>
      <TableCell className="uppercase">{status}</TableCell>
      <TableCell>{formatPrice(totalAmount)}</TableCell>
    </TableRow>
  );
}
