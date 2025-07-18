"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./ui/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import the Zustand store instead of useUser
import { useClerkStore } from "@/lib/stores/clerk-store";

export function SiteHeader() {
  const path = usePathname();
  // Use Zustand store instead of direct Clerk hook
  const { user, isSignedIn, isLoaded } = useClerkStore();
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center justify-between gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          {/* <h1 className="text-base font-medium">Pantheon Capital Oversight</h1> */}
        </div>

        {/* NAV  */}
        {/* <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            <NavigationMenuItem>
              <Link href="/overview" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-zinc-300 ${
                    path == "/overview" && "text-white"
                  }`}
                >
                  Overview
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/market" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-zinc-300 ${
                    path == "/market" && "text-white"
                  }`}
                >
                  Market
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/news" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-zinc-300 ${path == "/news" && "text-white"}`}
                >
                  News
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/trade" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-zinc-300 ${
                    path == "/trades" && "text-white"
                  }`}
                >
                  Trades
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        <div className="flex gap-4">
          {isLoaded && isSignedIn && user && user.firstName && (
            <p>Hey {user.firstName}!</p>
          )}{" "}
          <UserButton />
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
}
