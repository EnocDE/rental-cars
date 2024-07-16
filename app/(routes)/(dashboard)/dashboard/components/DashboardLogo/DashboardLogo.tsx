import Image from "next/image";
import Link from "next/link";

export default function DashboardLogo() {
  return (
    <Link
      href={"/"}
      className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6">
      <Image
        src={"/logo.svg"}
        alt="logo rental cars"
        width={30}
        height={30}
        priority />
      <h1 className="text-xl font-bold">Rental Cars</h1>
    </Link>
  )
}
