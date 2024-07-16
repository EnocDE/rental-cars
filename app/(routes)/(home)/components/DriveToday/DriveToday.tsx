import Reveal from "@/components/shared/Reveal/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function DriveToday() {
  return (
    <div className="mx-auto lg:my-5 p-6 max-w-7xl">
      <div className="relative bg-[url('/images/background-2.jpg')] bg-cover bg-no-repeat p-6 lg:p-32 rounded-xl">
        <div className="lg:flex gap-6">
          <div className="z-10">
            <h3 className="text-4xl text-white">Drive your dream car today</h3>
            <p className="my-5 text-white text-xl">Register and explore our premiums cars</p>
            <Link href="/sign-in"><Button variant="outline" size="lg">Sign in</Button></Link>
          </div>
          <Reveal className="top-5 lg:-right-32 z-0 lg:absolute" position="right" delay={.2}>
            <Image src="/images/audi.png" alt="Car Drive" width={550} height={250} className="mx-auto"/>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
