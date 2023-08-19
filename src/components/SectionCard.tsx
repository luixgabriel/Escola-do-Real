'use client'
import Image from 'next/image'

export default function SectionCard({
  item,
}: {
  item: {
    src: string
    alt: string
    title: string
    text: string
  }
}) {
  return (
    <div className="my-4 flex flex-col content-center items-center justify-between gap-4 rounded-lg border-b-8 border-green-500 bg-gray-50 p-5 font-medium">
      <Image height={52} width={52} alt={item.alt} src={item.src} />
      <h3 className="text-xl font-semibold text-green-500">{item.title}</h3>
      <p className="text-xs text-gray-600">{item.text}</p>
    </div>
  )
}
