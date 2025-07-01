"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import React from "react";
import Link from "next/link";

function Header() {
  const { user, isSignedIn } = useUser();

  return (
    <div>
      {!isSignedIn ? (
        <header className="bg-white dark:bg-transparent">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a
              className="block text-teal-600 dark:text-green-600 font-semibold"
              href="/"
            >
              {" "}
              Pantheon
              <span className="text-white"> Capital Oversight</span>
            </a>

            <div className="flex flex-1 items-center justify-end gap-4">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Home
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
                      Features
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
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="gap-2 flex">
                  {isSignedIn ? (
                    <UserButton />
                  ) : (
                    <>
                      <Link href={"/sign-in"}>
                        <Button variant="outline" className="mr-2">
                          Signin
                        </Button>
                      </Link>
                      <Link href={"/sign-up"}>
                        <Button variant="default">Signup</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
