import Link from 'next/link'

export default function Banner() {
  return (
    <main className="flex flex-col items-center justify-center bg-[url('/images/banners/main.png')] bg-cover bg-bottom py-32">
      <h1 className="mb-10 text-center text-6xl font-bold text-white">
        Escola do Real
      </h1>
      <p className="mb-20 w-8/12 text-center text-3xl font-light text-white">
        A Escola do Real busca democratizar a educação financeira no Brasil e
        desmistificar os esteriótipos sobre dinheiro na vida dos brasileiros.
      </p>
      <Link
        href={'/curso/economia-basica'}
        className="inline rounded-full bg-white px-8 py-4 text-lg font-medium uppercase text-green-500 hover:bg-gray-100"
      >
        Conheça nosso curso!
      </Link>
    </main>
  )
}
