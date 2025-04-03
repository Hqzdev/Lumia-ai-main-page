"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string
  type?: "success" | "error"
}

export function Toast({ message, type = "success", className, ...props }: ToastProps) {
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-white",
        type === "success" ? "bg-green-500" : "bg-red-500",
        className
      )}
      {...props}
    >
      {message}
    </div>
  )
} 