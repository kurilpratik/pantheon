"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div>
      <Link href={"/dashboard"}>
        <li
          className={`'hover:text-primary font-medium text-sm cursor-pointer' ${
            path == "/" && "text-primary"
          }`}
        >
          Dashboard
        </li>
      </Link>
      <h2 className="text-2xl">Home - Landing</h2>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button variant="outline">Login</Button>
        </Link>
      )}
    </div>
  );
}
