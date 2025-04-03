"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { handleSubmit } from "./actions"
import { AuthForm } from "@/components/auth-form"
import { SubmitButton } from "@/components/submit-button"
import { Toast } from "@/components/toast"
import AnimatedGradient from "@/components/animated-gradient"
import FloatingElements from "@/components/floating-elements"

export default function LoginPage() {
  const router = useRouter()
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [showToast, setShowToast] = useState(false)

  async function onSubmit(formData: FormData) {
    try {
      const result = await handleSubmit(formData)
      if (result.success) {
        setIsSuccessful(true)
        setShowToast(true)
        setTimeout(() => {
          router.push("/dashboard")
        }, 1000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center relative overflow-hidden p-4">
      <AnimatedGradient />
      <FloatingElements />

      <div className="w-full max-w-md overflow-hidden rounded-[20px] border border-gray-300 bg-white/80 backdrop-blur-lg shadow-lg flex flex-col gap-8 p-6 z-10">
        <div className="flex flex-col items-center justify-center gap-2 px-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Sign In</h3>
          <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
        </div>

        <AuthForm action={onSubmit}>
          <SubmitButton
            isSuccessful={isSuccessful}
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Sign in
          </SubmitButton>
          <p className="text-center text-sm text-gray-600 mt-4">
            {"Don't have an account? "}
            <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
              Sign up
            </Link>
            {" for free."}
          </p>
        </AuthForm>

        <Link 
          href="/"
          className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-500 transition-colors"
        >
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Back to home
        </Link>
      </div>

      {showToast && (
        <Toast
          message="Successfully logged in!"
          type="success"
          onAnimationEnd={() => setShowToast(false)}
        />
      )}
    </div>
  )
} 