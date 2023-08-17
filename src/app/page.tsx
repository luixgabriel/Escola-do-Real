import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  const content = 'Home'
  return (
    <>
      <Navbar />
      <h1 className="py-5 font-semibold text-green-700">{content}</h1>
      <Link href={'/curso/economia-basica'}>Curso de Economia Básica</Link>
    </>
  )
}
