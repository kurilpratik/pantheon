"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <header className="bg-white dark:bg-transparent">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a
          className="block text-teal-600 dark:text-green-400 font-semibold"
          href="#"
        >
          {" "}
          Pantheon
          <span className="text-white"> Capital Oversight</span>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between gap-6 md:gap-4">
          <nav aria-label="Global" className="block md:hidden">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  History
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              {isSignedIn ? (
                <UserButton />
              ) : (
                <Link href={"/sign-in"}>
                  <Button variant="outline">Login</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
