/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Group 1 1.svg";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Project", href: "/project", current: false },
  { name: "Article", href: "articles", current: false },
  { name: "Learn", href: "/learn", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="container relative mx-auto">
            {/* <!-- Flex container --> */}
            <div className="flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#667085] ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="md: flex w-1/5 items-center justify-center">
                  <Link href="/">
                    <Image src={Logo} alt="logo" className="w-100" />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block md:ml-60">
                  <div className="hidden space-x-6 text-[#667085]  md:flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? " text-black " : " hover:text-black ",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <SearchIcon className="headerIcon" />
              </div>
              <div className="cursor-pointer rounded-md   text-sm font-medium text-white">
                <Link href="/explore">
                  <button className="btn2">Explore All Projects</button>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-violet-500 text-white shadow-lg"
                      : "text-gray-300 hover:bg-violet-500 hover:text-white hover:shadow-lg",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
