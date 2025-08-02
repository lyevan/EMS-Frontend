import React from "react";
import useToastStore from "../store/toastStore";
import { X, CircleCheck } from "lucide-react";

const Toast = () => {
  const { message, type, isVisible, hideToast } = useToastStore();

  if (!isVisible) return null;

  // Map alert types to specific DaisyUI classes
  const getAlertClass = (type) => {
    switch (type) {
      case "success":
        return "alert alert-success";
      case "error":
        return "alert alert-error";
      case "warning":
        return "alert alert-warning";
      case "info":
        return "alert alert-info";
      default:
        return "alert alert-info";
    }
  };

  return (
    <div className="toast toast-top toast-end z-100">
      <div className={`${getAlertClass(type)}`}>
        <CircleCheck className="w-6 h-6 mr-2" />
        <span>{message}</span>
        <button
          className={`cursor-pointer`}
          onClick={() => useToastStore.getState().hideToast()}
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default Toast;
