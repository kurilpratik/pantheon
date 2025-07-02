import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "@/components/site-header";
import Image from "next/image";
import Chat from "../_components/Chat";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider className="sidebar-provider overflow-clip">
      <Image
        src="/green-gradient.png"
        alt="Green gradient"
        width={500}
        height={300}
        priority
        id="green-gradient"
      />
      <Image
        src="/purple-gradient.png"
        alt="Purple gradient"
        width={500}
        height={300}
        priority
        id="purple-gradient"
      />
      <AppSidebar variant="sidebar" />
      {/* MAIN  */}
      <SidebarInset className="overflow-idden max-h-screen bg-transparent">
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col gap-2">
              {children} {/* This is the outlet for nested pages */}
            </div>
            <div className="px-4 md:gap-6 md:py-6 lg:px-6">
              <Chat className="h-full" />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
