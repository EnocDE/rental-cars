import { Button } from "@/components/ui/button";
import Link from "next/link";
Link;

export default function Page() {
  return (
    <div className="p-6 mx-auto max-w-7xl mt-40">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold">Something went wrong!</h1>
        <p>
          Please try again in a few minutes or contact with us for assistance.
        </p>
        <p>We are sorry for the inconvenience with your purchase.</p>
        <Link href="/" className="mt-3">
          <Button>Go home</Button>
        </Link>
      </div>
    </div>
  );
}
