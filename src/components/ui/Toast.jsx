import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";

/**
 * Toast — lightweight notification component.
 *
 * Props:
 *   message  - string message to display
 *   type     - "success" | "error" | "info" (default: "info")
 *   onClose  - callback when user dismisses or auto-dismiss fires
 *   duration - ms before auto-dismiss (default: 4000, 0 = no auto-dismiss)
 */
export default function Toast({ message, type = "info", onClose, duration = 4000 }) {
  useEffect(() => {
    if (!duration || !onClose) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const config = {
    success: {
      icon:  <CheckCircle2 size={18} />,
      base:  "bg-primary-50 dark:bg-primary-900/30 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300",
      icon_: "text-primary-500",
    },
    error: {
      icon:  <AlertCircle size={18} />,
      base:  "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300",
      icon_: "text-red-500",
    },
    info: {
      icon:  <AlertCircle size={18} />,
      base:  "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300",
      icon_: "text-blue-500",
    },
  };

  const { icon, base, icon_ } = config[type] || config.info;

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="alert"
          aria-live="assertive"
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-hover max-w-sm ${base}`}
        >
          <span className={icon_}>{icon}</span>
          <p className="text-sm font-medium flex-1">{message}</p>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close notification"
              className="opacity-60 hover:opacity-100 transition-opacity ml-1"
            >
              <X size={16} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
