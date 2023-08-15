import { NextResponse } from 'next/server'

interface ILesson {
  id: number
  number: number
  thumb: string
  title: string
  description: string
  duration: number
  url: string
}

export async function GET() {
  const data: ILesson[] = []

  return NextResponse.json({ data })
}
