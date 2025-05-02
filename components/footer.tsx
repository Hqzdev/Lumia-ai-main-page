"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 mr-3 flex items-center justify-center">
                <span className="text-2xl font-bold">L</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Yumi.AI</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Empowering your creativity and productivity with advanced AI technology.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/creative-ideas" className="text-gray-400 hover:text-blue-400 transition-colors">Creative Ideas</Link>
              <Link href="/code-help" className="text-gray-400 hover:text-blue-400 transition-colors">Code Help</Link>
              <Link href="https://luren-documentation.vercel.app/" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</Link>
              <Link href="/knowledge" className="text-gray-400 hover:text-blue-400 transition-colors">Knowledge</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a href="mailto:info@Yumi.AI" className="text-gray-400 hover:text-blue-400 transition-colors block">
              info@Yumi.AI
            </a>
            <div className="flex space-x-4 mt-4">
              <a href="https://lurenai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-blue-500/10">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 