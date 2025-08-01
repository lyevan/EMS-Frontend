import { create } from "zustand";

const useToastStore = create((set) => ({
  message: "",
  type: "info", // can be "success", "error", "warning", etc.
  isVisible: false,
  hideToast: () => set({ isVisible: false, message: "", type: "info" }),
  showToast: (message, type = "info") => {
    set({ message, type, isVisible: true });
    setTimeout(() => {
      set({ isVisible: false, message: "", type: "info" });
    }, 5000); // Hide after 5 seconds
  },
}));

export default useToastStore;
