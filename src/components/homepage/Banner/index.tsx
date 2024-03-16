import Link from 'next/link'

export default function Banner() {
  return (
    <main className="flex flex-col items-center justify-center bg-[url('/images/banners/main.png')] bg-cover bg-bottom py-24 md:py-32">
      <h1 className="mb-10 text-center text-4xl font-bold text-white md:text-6xl">
        Escola do Real
      </h1>
      <p className="mb-20 w-10/12 text-center text-xl font-light text-white md:w-8/12 md:text-3xl">
        A Escola do Real é a primeira instituição sem fins lucrativos dedicada
        exclusivamente à democratização da educação financeira no Brasil. Nosso
        propósito é mudar a relação dos brasileiros com finanças, eliminando
        barreiras culturais e educacionais que impedem um entendimento claro e
        eficaz sobre gestão de dinheiro.
      </p>
      <Link
        href={'/curso/economia-basica'}
        className="font-md inline rounded-full bg-white px-8 py-4 text-base uppercase text-green-500 hover:bg-gray-100 md:text-lg"
      >
        Junte-se a nós!
      </Link>
    </main>
  )
}
