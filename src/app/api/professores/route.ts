import { NextResponse } from 'next/server'

interface IProfessor {
  id: number
  image: string
  name: string
  subject: string
}

export async function GET() {
  const data: IProfessor[] = [
    {
      id: 1,
      image: 'url',
      name: 'João',
      subject: 'Economista',
    },
    {
      id: 2,
      image: 'url',
      name: 'Maria',
      subject: 'Economista',
    },
    {
      id: 3,
      image: 'url',
      name: 'Joaquim',
      subject: 'Economista',
    },
    {
      id: 4,
      image: 'url',
      name: 'Evandro',
      subject: 'Economista',
    },
  ]

  return NextResponse.json({ data })
}
