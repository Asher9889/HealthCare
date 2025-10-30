import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

type DialogType = "success" | "error" | "info";

interface DynamicDialogProps {
  open: boolean;
  onClose: () => void;
  type?: DialogType;
  title?: string;
  message?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export default function DynamicDialog({
  open,
  onClose,
  type = "info",
  title,
  message,
  primaryAction,
  secondaryAction,
}: DynamicDialogProps) {
  const iconMap = {
    success: <CheckCircle className="h-10 w-10 text-green-500" />,
    error: <AlertCircle className="h-10 w-10 text-red-500" />,
    info: <Info className="h-10 w-10 text-blue-500" />,
  };

  const bgMap = {
    success: "bg-green-50",
    error: "bg-red-50",
    info: "bg-blue-50",
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className={`max-w-md rounded-2xl ${bgMap[type]}`}>
        <DialogHeader className="flex flex-col items-center text-center space-y-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {iconMap[type]}
          </motion.div>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            {title || (type === "success" ? "Success!" : "Notification")}
          </DialogTitle>
          <DialogDescription className="text-gray-700">
            {message || "Your action was processed successfully."}
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-3 mt-6">
          {secondaryAction && (
            <Button
              variant="outline"
              onClick={secondaryAction.onClick}
              className="rounded-xl"
            >
              {secondaryAction.label}
            </Button>
          )}
          <Button
            className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            onClick={primaryAction?.onClick || onClose}
          >
            {primaryAction?.label || "OK"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
