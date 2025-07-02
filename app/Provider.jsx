import React from "react";
import Header from "./_components/Header";
import { ThemeProvider } from "../providers/theme-provider";

function Provider({ children }) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        // disableTransitionOnChange
      >
        {/* <Header /> */}
        <div className="flex items-center justify-center">{children}</div>
      </ThemeProvider>
    </div>
  );
}

export default Provider;
