import React from 'react'
import ThemeToggle from '../components/ThemeToggle'

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col space-y-6 bg-blue-700 text-gray-100 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        <h1 className="text-4xl font-bold text-gray-100">Welcome to the Home Page</h1>
        <ThemeToggle />

    </div>
  )
}

export default HomePage