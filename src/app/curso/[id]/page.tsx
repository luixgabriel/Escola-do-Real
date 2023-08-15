'use client'

import { useParams } from 'next/navigation'

export default function Curso() {
  const { id } = useParams()
  return <p className="py-5 font-semibold text-blue-700">{id}</p>
}
