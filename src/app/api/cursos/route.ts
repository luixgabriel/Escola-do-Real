import { NextResponse } from 'next/server'

interface ICourse {
  id: string
  banner: string
  about: string
  lessons: number
  duration: number
}

export async function GET() {
  const data: ICourse[] = [
    {
      id: 'nome-curso',
      banner: 'url',
      about: 'Lorem ipsum...',
      lessons: 27,
      duration: 1298,
    },
  ]

  return NextResponse.json({ data })
}
