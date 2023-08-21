'use client'

import { useEffect, useState } from 'react'

export default function ScrollTop() {
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => setY(window.scrollY))
    return () => window.removeEventListener('scroll', () => setY)
  }, [y])

  return (
    <>
      {!!y && (
        <div
          className="fixed bottom-10 right-8 cursor-pointer rounded-full border border-white bg-black/70 p-3 text-white hover:bg-black/80"
          onClick={() => window.scrollTo(0, 0)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      )}
    </>
  )
}
