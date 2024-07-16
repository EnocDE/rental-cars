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
    <div className="max-w-5xl py-5 mx-auto">
      <div className="sm:justify-between flex gap-5 flex-wrap justify-center ">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo rental cars"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold">Rental Cars</span>
        </Link>

        <div className="flex items-center justify-center gap-7">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/cars">Cars List</Link>
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
