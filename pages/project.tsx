import ProjectCard from "@/components/ProjectCard";
import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <>
      <section className="container mx-auto mt-5 ">
        <div className="flex space-x-6 sm:mt-0  sm:justify-end mr-4">
          {/* <div className="bg-[#D1FADF] flex mb-5 space-x-6 sm:mt-0  sm:justify-end text-[#039855]">
            <Link href="/">All</Link>
            <Link href="/trending">Trending</Link>
            <Link href="/polkadot"> Polkadot</Link>
            <Link href="/kusama"> Kusama</Link>
          </div> */}
        </div>
        <div className="mt-5">
          <ProjectCard />
        </div>
      </section>
    </>
  );
}
