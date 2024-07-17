"use client";
import { Button } from "@/components/ui/button";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Heart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IconWithText from "../IconWithText/IconWithText";

export default function Navbar() {
  const { userId } = useAuth();
  return (
    <div className="mx-auto py-5 max-w-5xl">
      <div className="flex flex-wrap justify-center sm:justify-between gap-5">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo rental cars"
            width={50}
            height={50}
          />
          <span className="font-bold text-xl">Rental Cars</span>
        </Link>

        <div className="flex justify-center items-center gap-7">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/cars">List of cars</Link>
          {userId ? (
            <>
              <Link href="/favorites">
                <Heart strokeWidth={1} className="cursor-pointer" />
              </Link>
              <UserButton />
            </>
          ) : (
            <Link href="/sign-in">
              <Button>
                <User className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
