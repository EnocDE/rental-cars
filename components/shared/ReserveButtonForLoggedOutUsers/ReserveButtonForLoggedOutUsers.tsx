import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function ReserveButtonForLoggedOutUsers() {
  return (
      <Link href="/sign-in" className="mt-3">
        <Button variant="outline" className="w-full">Login to reserve</Button>
      </Link>
  );
}
