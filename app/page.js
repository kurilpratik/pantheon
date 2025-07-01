"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Header from "./_components/Header";
import Landing from "./_components/Landing";

export default function Home() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Landing />
    </div>
  );
}
