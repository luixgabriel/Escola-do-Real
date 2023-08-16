import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Not Found',
  description:
    'Uma ONG voltada para a educação financeira de todos os brasileiros.',
}

export default function NotFound() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <Link href={'/'}>Voltar para página inicial</Link>
    </>
  )
}
