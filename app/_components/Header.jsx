// "use client";

// import { Button } from "@/components/ui/button";
// import { UserButton, useUser } from "@clerk/nextjs";
// import { Plus } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useEffect } from "react";
// import { Separator } from "@/components/ui/separator";
// import { SidebarTrigger } from "@/components/ui/sidebar";
// import { ModeToggle } from "@/components/ui/mode-toggle";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

// function Header() {
//   const path = usePathname();
//   const { user, isSignedIn } = useUser();
//   useEffect(() => {
//     console.log(path);
//   }, [path]);

//   return (
//     <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
//       <div className="flex w-full justify-between items-center gap-1 px-4 lg:gap-2 lg:px-6">
//         <div className="flex items-center">
//           <SidebarTrigger className="-ml-1" />
//           <Separator
//             orientation="vertical"
//             className="mx-2 data-[orientation=vertical]:h-4"
//           />
//           <h1 className="text-base font-medium">Pantheon Capital Oversight</h1>
//         </div>

//         <NavigationMenu>
//           <NavigationMenuList className="flex items-center gap-4">
//             <NavigationMenuItem>
//               <Link href="/overview" legacyBehavior passHref>
//                 <NavigationMenuLink>Overview</NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/market" legacyBehavior passHref>
//                 <NavigationMenuLink>Market</NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/news" legacyBehavior passHref>
//                 <NavigationMenuLink>News</NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//             <NavigationMenuItem>
//               <Link href="/trade" legacyBehavior passHref>
//                 <NavigationMenuLink>Trades</NavigationMenuLink>
//               </Link>
//             </NavigationMenuItem>
//           </NavigationMenuList>
//         </NavigationMenu>
//         <div className="flex gap-4">
//           <UserButton />
//           <ModeToggle />
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React from "react";

function Header() {
  return <div>Header</div>;
}

export default Header;
