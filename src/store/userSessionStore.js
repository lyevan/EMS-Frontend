import { create } from "zustand";
import axios from "axios";

const useUserSessionStore = create((set, get) => ({
  user: null,
  isLoading: true,

  setUser: (userData) => set({ user: userData }),

  clearUser: () => set({ user: null }),

  login: (userData) => {
    set({ user: userData });
  },

  logout: async () => {
    try {
      await axios.post("/users/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      set({ user: null });
    }
  },
  checkAuthStatus: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.post("/users/verify");
      if (response.data && response.data.success) {
        set({ user: response.data.user, isLoading: false });
      } else {
        console.log("No user data in response");
        set({ user: null, isLoading: false });
      }
    } catch (error) {
      console.log("User not authenticated:", error.message);
      set({ user: null, isLoading: false });
    }
  },

  hasRole: (requiredRole) => {
    const { user } = get();
    return user?.role === requiredRole;
  },

  isAuthenticated: () => {
    const { user } = get();
    return !!user;
  },

  initialize: async () => {
    const { checkAuthStatus } = get();
    await checkAuthStatus();
  },
}));

export { useUserSessionStore };
