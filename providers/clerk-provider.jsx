"use client";

import { ClerkProvider as ClerkProviderOriginal } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useClerkSync } from "@/hooks/use-clerk-sync";

// Inner component that syncs with Zustand
function ClerkSyncWrapper({ children }) {
  useClerkSync();
  return <>{children}</>;
}

export function ClerkProvider({ children }) {
  return (
    <ClerkProviderOriginal
      appearance={{
        baseTheme: dark,
      }}
    >
      <ClerkSyncWrapper>{children}</ClerkSyncWrapper>
    </ClerkProviderOriginal>
  );
}
