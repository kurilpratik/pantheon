import { create } from "zustand";

// Store for Clerk user state - no Clerk hooks used here
export const useClerkStore = create((set, get) => ({
  // User state
  user: null,
  isSignedIn: false,
  isLoaded: false,

  // Auth state
  isAuthenticated: false,
  sessionId: null,
  session: null,

  // Actions
  setUser: (user) => set({ user }),
  setIsSignedIn: (isSignedIn) => set({ isSignedIn }),
  setIsLoaded: (isLoaded) => set({ isLoaded }),
  setAuth: (auth) =>
    set({
      isAuthenticated: auth.isSignedIn,
      sessionId: auth.sessionId,
      session: auth.session,
    }),

  // Update all user-related state
  updateUserState: (userState) =>
    set({
      user: userState.user,
      isSignedIn: userState.isSignedIn,
      isLoaded: userState.isLoaded,
    }),

  // Update all auth-related state
  updateAuthState: (authState) =>
    set({
      isAuthenticated: authState.isSignedIn,
      sessionId: authState.sessionId,
      session: authState.session,
    }),

  // Clear all state (for logout)
  clearState: () =>
    set({
      user: null,
      isSignedIn: false,
      isLoaded: false,
      isAuthenticated: false,
      sessionId: null,
      session: null,
    }),

  // Getters
  getUser: () => get().user,
  getIsSignedIn: () => get().isSignedIn,
  getIsLoaded: () => get().isLoaded,
  getIsAuthenticated: () => get().isAuthenticated,
  getSession: () => get().session,
}));
