import { TableCell, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/utils/helpers";
import { Order } from "@prisma/client";
import React from "react";

interface AdminReservationDetailsProps {
  order: Order;
}

export default function AdminReservationDetails(
  props: AdminReservationDetailsProps
) {
  const { order } = props;
  const {carName, orderDate, orderEndDate, totalAmount, userId, createdAt } = order
  return (
    <TableRow>
      <TableCell>{createdAt.toLocaleDateString()}</TableCell>
      <TableCell>{userId}</TableCell>
      <TableCell>{carName}</TableCell>
      <TableCell>{orderDate.toLocaleDateString()}</TableCell>
      <TableCell>{orderEndDate.toLocaleDateString()}</TableCell>
      <TableCell>{formatPrice(totalAmount)}</TableCell>
    </TableRow>
  );
}
