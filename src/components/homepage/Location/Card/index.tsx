'use client'

import Image from 'next/image'

interface CardProps {
  item: {
    src: string
    alt: string
    title: string
    text: string
  }
}

export default function Card({ item }: CardProps) {
  return (
    <div className="my-4 flex h-80 w-64 flex-col content-center items-center justify-center gap-4 rounded-lg border-b-8 border-green-500 bg-gray-50 px-7 py-5 font-medium">
      <Image height={52} width={52} alt={item.alt} src={item.src} />
      <h3 className="text-2xl font-semibold text-green-500 md:text-xl">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 md:text-xs">{item.text}</p>
    </div>
  )
}
