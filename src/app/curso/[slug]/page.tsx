import { ICourse } from '@/interfaces/course'
import api from '@/server/api'
import { notFound } from 'next/navigation'

async function getCourseById(slug: string) {
  try {
    const response = await api.get(`/cursos/${slug}`)
    const { data } = await response.data
    return data
  } catch {
    notFound()
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const course: ICourse = await getCourseById(params.slug)
  return {
    title: `Curso - ${course.name}`,
    description: 'Esse é o nosso curso sobre cursos.',
  }
}

export default async function Curso({ params }: { params: { slug: string } }) {
  const course = await getCourseById(params.slug)

  return (
    <>
      <p className="py-2 font-medium text-blue-700">{course.id}</p>
      <p className="py-2 font-medium text-blue-700">{course.slug}</p>
      <p className="py-2 font-medium text-blue-700">{course.banner}</p>
      <p className="py-2 font-medium text-blue-700">{course.name}</p>
      <p className="py-2 font-medium text-blue-700">{course.about}</p>
      <p className="py-2 font-medium text-blue-700">{course.duration}</p>
      <p className="py-2 font-medium text-blue-700">{course.lessons}</p>
    </>
  )
}
