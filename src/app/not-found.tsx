import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Not Found',
  description: 'A rota desta página não foi encontrada por nosso sistema.',
}

export default function NotFound() {
  return (
    <>
      <h1>404 - Not Found</h1>
      <Link href={'/'}>Voltar para página inicial</Link>
    </>
  )
}
