'use client'

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col items-center gap-4 sm:gap-6">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/EB_logo.png"
          alt="EB-TCG Logo"
          className="h-20 sm:h-32"
        />

        {/* Copyright */}
        <p className="text-gray-400 text-base sm:text-xl">
          &copy; {new Date().getFullYear()} EB-TCG. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
