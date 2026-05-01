import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="#" className="flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-black dark:text-white">
            CSS<span className="text-[#7A7FEE]">Hub</span>
          </span>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Настройка серверов CS:S, установка веб-панелей и разработка сайтов-визиток.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().getFullYear()} CSSHub. Все права защищены.
        </p>
      </div>
    </footer>
  )
}