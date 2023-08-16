import { ICourse } from '@/interfaces/course'
import { NextResponse } from 'next/server'
import { Context } from 'vm'
import { data } from '../data'

export async function GET(request: Request, context: Context) {
  const slug: string = context.params.slug
  const course: ICourse | undefined = data.find(
    (course) => course.slug === slug,
  )
  if (!course) return NextResponse.json({ data: [] }, { status: 404 })
  return NextResponse.json({ data: course }, { status: 200 })
}
