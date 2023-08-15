import { NextResponse } from 'next/server'

interface IModule {
  id: number
  course_id: string
  number: number
  title: string
  description: string
  duration: number
}

export async function GET() {
  const data: IModule[] = [
    {
      id: 1,
      course_id: 'nome-curso',
      number: 1,
      title: 'Primeiro módulo',
      description: 'Lorem ipsum...',
      duration: 34,
    },
  ]

  return NextResponse.json({ data })
}
