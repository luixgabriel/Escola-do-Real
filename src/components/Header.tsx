import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-zinc-100 px-[10%]">
      <a href="/">
        <Image
          className="m-8"
          src={'/logo.png'}
          width={188}
          height={68}
          alt="Logo da escola do real"
          priority
        />
      </a>
      <div className="flex gap-4">
        <button className="rounded-md bg-blue-500 px-5 py-3 uppercase text-white hover:bg-blue-700">
          Fazer Doação
        </button>
        <button className="rounded-md bg-green-500 px-5 py-3 uppercase text-white hover:bg-green-600">
          Faça Parte
        </button>
      </div>
    </header>
  )
}
