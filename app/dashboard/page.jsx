import { AppSidebar } from "@/components/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import data from "./data.json";
import Image from "next/image";
import Chat from "../_components/Chat";

export default function Page() {
  return (
    <SidebarProvider className="sidebar-provider">
      <Image
        src="/green-gradient.png" // Path to your image
        alt="Green gradient"
        width={500} // Desired width
        height={300} // Desired height
        priority // Loads image faster
        id="green-gradient"
      />
      <Image
        src="/purple-gradient.png" // Path to your image
        alt="Purple gradient"
        width={500} // Desired width
        height={300} // Desired height
        priority // Loads image faster
        id="purple-gradient"
      />
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <Tabs defaultValue="account" className="w-[400px] flex gap-4 m-4">
            <h1>Deck</h1>
            <TabsList>
              <TabsTrigger value="account">Equity</TabsTrigger>
              <TabsTrigger value="password">Mutual Funds</TabsTrigger>
              <TabsTrigger value="password">Bonds</TabsTrigger>
              <TabsTrigger value="password">Tax Exemptions</TabsTrigger>
            </TabsList>
            {/* <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent> */}
          </Tabs>
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col gap-2">
              {/* <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6"> */}
              <SectionCards />
              <ChartAreaInteractive className="px-4" />
            </div>
            <div className="px-4 lg:px-6 md:gap-6 md:py-6">
              <Chat className="h-full" />
            </div>
          </div>

          {/* <DataTable data={data} /> */}
          {/* </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
