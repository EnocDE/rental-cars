import { Button } from "@/components/ui/button";
import Link from "next/link";
Link;

export default function Page() {
  return (
    <div className="p-6 mx-auto max-w-7xl mt-40">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold">Thank you for selling with us!</h1>
        <p>
          In a short time we&apos;ll send you all the information to your email.
        </p>
        <p>You can view all your orders in the client area.</p>
        <Link href="/" className="mt-3">
          <Button>Go home</Button>
        </Link>
      </div>
    </div>
  );
}
