import { db } from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AdminReservationsTable from "./components/AdminReservationsTable/AdminReservationsTable";
import AdminReservationDetails from "./components/AdminReservationDetails/AdminReservationDetails";

export default async function Page() {
  const { userId } = auth();
  const user = await currentUser()
  console.log(user);
  

  if (!userId) return redirect("/");

  const orders = await db.order.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Reservation Manager</h1>
      <AdminReservationsTable orders={orders}>
        {orders.map((order) => (
          <AdminReservationDetails key={order.id} order={order} />
        ))}
      </AdminReservationsTable>
    </div>
  );
}
