import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { countTotalAmount, formatPrice } from "@/utils/helpers";
import { Order } from "@prisma/client";
import { ReactNode } from "react";

interface AdminReservationsTableProps {
  children: ReactNode
  orders: Order[]
}

export default function AdminReservationsTable({children, orders}: AdminReservationsTableProps) {
  const amounts: number[] = orders.map(order => +order.totalAmount)
  const totalOrdersAmount = countTotalAmount(amounts).toString()
  return (
    <Table>
      <TableCaption>A list of clients reservations.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order date</TableHead>
          <TableHead>Customer ID</TableHead>
          <TableHead>Car</TableHead>
          <TableHead>Start date</TableHead>
          <TableHead>Return date</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {children}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total amount</TableCell>
          <TableCell>{formatPrice(totalOrdersAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
