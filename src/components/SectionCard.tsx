'use client'
import Image from 'next/image'

const data = [
  {
    src: '/icons/globe.svg',
    alt: 'globe icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/hands.svg',
    alt: 'hands icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/location.svg',
    alt: 'location icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    src: '/icons/talk.svg',
    alt: 'talk icon',
    title: 'Estrutura',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
]

export default function SectionCard() {
  return (
    <section className="custom-mx-global my-16 grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4 ">
      {data.map((item) => (
        <section
          key={item.title}
          className="my-4 flex h-72 w-56 flex-col content-center items-center justify-between rounded-lg border-b-8 border-green-500 bg-gray-50 p-5 font-medium"
        >
          <Image
            height={68}
            width={68}
            alt={item.alt}
            src={item.src}
            className="my-4"
          />
          <h3 className="text-xl font-bold text-green-500">{item.title}</h3>
          <p className="text-sm font-medium">{item.text}</p>
        </section>
      ))}
    </section>
  )
}
