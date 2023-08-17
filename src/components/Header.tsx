'use client'

import Image from 'next/image'

export default function Header() {
  return (
    <header className=" flex items-center justify-around bg-zinc-100">
      <Image
        className="m-8"
        src="/images/logo.png"
        width={188}
        height={68}
        alt="Logo da escola do real"
      />
      <div>
        <button>Fazer doacao</button>
        <button>Faça parte</button>
      </div>
    </header>
  )
}
