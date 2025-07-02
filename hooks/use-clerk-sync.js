import { useEffect } from "react";
import { useUser, useAuth } from "@clerk/nextjs";
import { useClerkStore } from "@/lib/stores/clerk-store";

export function useClerkSync() {
  const { user, isSignedIn, isLoaded } = useUser();
  const { isSignedIn: authIsSignedIn, sessionId, session } = useAuth();

  const { updateUserState, updateAuthState, clearState } = useClerkStore();

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn && user) {
        // User is signed in
        updateUserState({ user, isSignedIn, isLoaded });
        updateAuthState({ isSignedIn: authIsSignedIn, sessionId, session });
      } else {
        // User is not signed in
        clearState();
      }
    }
  }, [
    user,
    isSignedIn,
    isLoaded,
    authIsSignedIn,
    sessionId,
    session,
    updateUserState,
    updateAuthState,
    clearState,
  ]);

  return { user, isSignedIn, isLoaded };
}
