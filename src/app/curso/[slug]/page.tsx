import { ICourse } from '@/interfaces/course'
import api from '@/server/api'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Module from './module'
import Professor from './professor'

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
  const course: ICourse = await getCourseById(params.slug)

  return (
    <main>
      <Image
        className="mb-10 w-full"
        src={course.banner}
        alt="Banner do curso"
        width={1440}
        height={360}
      />
      <section className="px-20">
        <h1 className="pb-2 text-3xl font-semibold text-blue-700">
          Cuso de {course.name}
        </h1>
        {/* Inserir os icones de relógio e vídeo */}
        <p className="font-medium text-gray-600">
          <span className="mr-4">{course.lessons} Aulas</span>
          <span>{course.duration} minutos</span>
        </p>
        <p className="py-2 text-base font-normal text-gray-700">
          {course.about}
        </p>
      </section>

      <section className="px-20 py-10">
        {course.modules.map((moduleId) => (
          <Module key={moduleId} id={moduleId} />
        ))}
      </section>

      {/* Adicionar o cabeçalho dos professores */}
      <section className="mb-10 grid grid-cols-4 gap-6 px-20">
        {course.professors.map((professorId) => (
          <Professor key={professorId} id={professorId} />
        ))}
      </section>
    </main>
  )
}
