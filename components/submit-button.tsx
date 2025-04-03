"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSuccessful?: boolean
}

export function SubmitButton({ isSuccessful, className, children, ...props }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className={cn(
        "w-full py-2 px-4 rounded-md text-white font-medium transition-all duration-200",
        className
      )}
      disabled={isSuccessful}
      {...props}
    >
      {isSuccessful ? "Success!" : children}
    </Button>
  )
} 