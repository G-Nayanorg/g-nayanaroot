"use client";
import { useCallback } from "react";
import { toast } from "react-hot-toast";

type ShowToastOptions = {
  title?: string;
  description?: string;
  duration?: number;
};

type ToastOptions = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
  duration?: number;
};

export function useToast() {
  const show = useCallback(({ title, description, duration = 4000 }: ShowToastOptions) => {
    toast.custom((t) => (
      <div
        className={`pointer-events-auto max-w-md w-full ${t.visible ? "animate-enter" : "animate-leave"}`}
        role="status"
        aria-live="polite"
      >
        <div className="bg-white border rounded-lg shadow-md px-4 py-3">
          {title && <div className="font-semibold text-sm">{title}</div>}
          {description && <div className="text-sm text-gray-500 mt-1">{description}</div>}
        </div>
      </div>
    ), { duration });
  }, []);

  const toastWithOptions = useCallback(({ title, description, variant = "default", duration }: ToastOptions) => {
    const toastContent = (
      <div className="pointer-events-auto max-w-md w-full" role="status" aria-live="polite">
        <div className={`border rounded-lg shadow-md px-4 py-3 ${
          variant === "destructive"
            ? "bg-red-50 border-red-200"
            : "bg-white border-gray-200"
        }`}>
          {title && <div className="font-semibold text-sm">{title}</div>}
          {description && <div className="text-sm mt-1">{description}</div>}
        </div>
      </div>
    );

    toast.custom(() => toastContent, { duration: duration || 4000 });
  }, []);

  return {
    show,
    toast: toastWithOptions,
    success: (msg: string, opts?: { duration?: number }) => toast.success(msg, opts),
    error: (msg: string, opts?: { duration?: number }) => toast.error(msg, opts),
    loading: (msg: string, opts?: { duration?: number }) => toast.loading(msg, opts),
    dismiss: (id?: string | number) => toast.dismiss(id as string | undefined),
  };
}

export default useToast;

