import { Order } from "@prisma/client";
import ReservesTable from "../ReservesTable/ReservesTable";
import ReserveDetails from "../ReserveDetails/ReserveDetails";

interface ReservesProps {
  orders: Order[];
}

export default function Reserves(props: ReservesProps) {
  const { orders } = props;
  return (
    <ReservesTable orders={orders}>
      {orders.map((order) => (
        <ReserveDetails key={order.id} order={order} />
      ))}
    </ReservesTable>
  );
}
