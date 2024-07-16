import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { countTotalAmount, formatPrice } from "@/utils/helpers";
import { Order } from "@prisma/client";
import { ReactNode } from "react";

interface ReservesTableProps {
  children: ReactNode;
  orders: Order[];
}

export default function ReservesTable({
  children,
  orders,
}: ReservesTableProps) {
  const amounts: number[] = orders.map(order => +order.totalAmount)
  const totalOrdersAmount = countTotalAmount(amounts).toString()
  return (
    <Table>
      <TableCaption>A list of your recent purchases.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead>Start date</TableHead>
          <TableHead>Return date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>Total</TableCell>
          <TableCell>{formatPrice(totalOrdersAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
