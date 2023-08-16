import api from '@/server/api'
import { notFound } from 'next/navigation'

async function getCourseById(id: string) {
  try {
    const response = await api.get(`/cursos/${id}`)
    const { data } = await response.data
    return data
  } catch {
    notFound()
  }
}

export default async function Curso({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id)

  return (
    <>
      <p className="py-2 font-medium text-blue-700">{course.id}</p>
      <p className="py-2 font-medium text-blue-700">{course.banner}</p>
      <p className="py-2 font-medium text-blue-700">{course.name}</p>
      <p className="py-2 font-medium text-blue-700">{course.about}</p>
      <p className="py-2 font-medium text-blue-700">{course.duration}</p>
      <p className="py-2 font-medium text-blue-700">{course.lessons}</p>
    </>
  )
}
