"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Header from "./_components/Header";

export default function Home() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <section class="bg-white grid py-32 lg:place-content-center dark:bg-transparent">
        <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div class="mx-auto max-w-prose text-center">
            <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Your road to
              <strong class="text-green-600"> financial </strong>
              success
            </h1>

            <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi. Natus, provident accusamus impedit minima harum corporis
              iusto.
            </p>

            <div class="mt-8 flex justify-center gap-4 sm:mt-6">
              <a
                class="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                href="#"
              >
                Learn More
              </a>
              <a
                class="inline-block rounded border bg-green-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-green-700"
                href="signin"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="max-w-5xl mx-auto bg-gray-100 p-10 rounded-sm">
        <div>
          <h3 class="text-slate-900 text-2xl font-semibold mb-4">
            Why Quality Design Matters
          </h3>
          <p class="text-slate-600 leading-relaxed text-base">
            Great design isn’t just about how things look—it’s about how they
            work. Whether you're building a landing page, product interface, or
            marketing asset, strong design helps improve user experience, boosts
            trust, and drives conversions. At ReadymadeUI, we focus on creating
            reusable, visually appealing layouts that make your development
            faster and easier.
          </p>
          <div class="mt-4">
            <a
              href="javascript:void(0);"
              class="text-blue-500 font-semibold hover:underline text-base"
            >
              Read more...
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div class="max-w-2xl px-8 mb-12">
            <h2 class="text-slate-900 text-2xl font-bold">
              Why Choose Our Templates
            </h2>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-y-8 lg:divide-x-2 lg:divide-gray-300">
            <div class="px-8">
              <h6 class="text-slate-900 text-base font-semibold mb-3">
                Reliable & Easy to Use
              </h6>
              <p class="text-sm text-slate-600 leading-relaxed">
                Our templates are crafted with usability in mind. Whether you're
                a developer or a business owner, you’ll find our layouts
                intuitive and quick to set up. With clean code, responsive
                design, and thoughtful structure, you can get your site live
                without any hassle or steep learning curve.
              </p>
            </div>
            <div class="px-8">
              <h6 class="text-slate-900 text-base font-semibold mb-3">
                Modern & Clean Designs
              </h6>
              <p class="text-sm text-slate-600 leading-relaxed">
                Stand out with fresh, contemporary designs built to impress.
                Every template follows the latest UI/UX principles to ensure
                your content is easy to read, visually appealing, and accessible
                across all devices. From spacing to typography, we focus on the
                details that matter.
              </p>
            </div>
            <div class="px-8">
              <h6 class="text-slate-900 text-base font-semibold mb-3">
                Built for Speed & Flexibility
              </h6>
              <p class="text-sm text-slate-600 leading-relaxed">
                Speed matters—for both users and search engines. Our templates
                are optimized for fast loading and seamless performance. Easily
                customize every section to fit your branding and project goals
                without digging through complex code.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="flex mx-auto justify-center gap-8">
        <article class="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-transparent">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Profit</p>

              <p class="text-2xl font-medium text-gray-900 dark:text-white">
                $240.94
              </p>
            </div>

            <span class="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </div>

          <div class="mt-1 flex gap-1 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>

            <p class="flex gap-2 text-xs">
              <span class="font-medium"> 67.81% </span>

              <span class="text-gray-500 dark:text-gray-400">
                {" "}
                Since last week{" "}
              </span>
            </p>
          </div>
        </article>

        <article class="rounded-lg border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-transparent">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">Profit</p>

              <p class="text-2xl font-medium text-gray-900 dark:text-white">
                $240.94
              </p>
            </div>

            <span class="rounded-full bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </span>
          </div>

          <div class="mt-1 flex gap-1 text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
              />
            </svg>

            <p class="flex gap-2 text-xs">
              <span class="font-medium"> 67.81% </span>

              <span class="text-gray-500 dark:text-gray-400">
                {" "}
                Since last week{" "}
              </span>
            </p>
          </div>
        </article>
      </section>

      {/* FAQs Section */}
      <section id="faq" class="space-y-4 max-w-4xl mx-auto mb-24">
        <details
          class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-neutral-950 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              What exactly does Pantheon do?
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 shadow-sm transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>

        <details class="group border-s-4 border-green-500 bg-gray-50 p-6 dark:bg-neutral-950 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 class="text-lg font-medium text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing?
            </h2>

            <span class="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 shrink-0 shadow-sm transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p class="mt-4 leading-relaxed text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
            veritatis molestias culpa in, recusandae laboriosam neque aliquid
            libero nesciunt voluptate dicta quo officiis explicabo consequuntur
            distinctio corporis earum similique!
          </p>
        </details>
      </section>
    </div>
  );
}
