import React from "react";
import Header from "./_components/Header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "../components/providers/theme-provider";

function Provider({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        {/* <Header /> */}
        {children}
      </ThemeProvider>
    </div>
  );
}

export default Provider;
