import { create } from "zustand";
import axios from "axios";

const useUserSessionStore = create((set, get) => ({
  // State
  user: null,
  isLoading: true,

  // Actions
  setUser: (userData) => set({ user: userData }),

  clearUser: () => set({ user: null }),

  login: (userData) => {
    // Store user data in state (role, username, employee_id)
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
      // Make a request to verify authentication (cookies will be sent automatically)
      const response = await axios.post("/users/verify");
      if (response.data && response.data.success) {
        console.log("Auth check successful:", response.data);
        // Extract the actual user data from the nested response
        set({ user: response.data.user, isLoading: false }); // Now contains {role, username, employee_id}
      } else {
        console.log("No user data in response");
        set({ user: null, isLoading: false });
      }
    } catch (error) {
      console.log("User not authenticated:", error.message);
      set({ user: null, isLoading: false });
    }
  },

  // Computed/Helper functions
  hasRole: (requiredRole) => {
    const { user } = get();
    return user?.role === requiredRole;
  },

  isAuthenticated: () => {
    const { user } = get();
    return !!user;
  },

  // Initialize authentication check
  initialize: async () => {
    const { checkAuthStatus } = get();
    await checkAuthStatus();
  },
}));

export { useUserSessionStore };
