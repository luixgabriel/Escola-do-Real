import { ICourse } from '@/interfaces/course'
import api from '@/server/api'
import { timeMask } from '@/utils/time-mask'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Module from './module'
import Professor from './professor'

async function getCourseBySlug(slug: string) {
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
  const course: ICourse = await getCourseBySlug(params.slug)
  return {
    title: `Curso - ${course.name}`,
    description: 'Esse é o nosso curso sobre cursos.',
  }
}

function VideoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export default async function Curso({ params }: { params: { slug: string } }) {
  const course: ICourse = await getCourseBySlug(params.slug)

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
        <p className="flex font-medium text-gray-600">
          <span className="mr-4 flex items-center gap-1">
            <VideoIcon />
            {course.lessons} Aulas
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {timeMask(course.duration)}
          </span>
        </p>
        <p className="py-2 text-base font-normal text-gray-700">
          {course.about}
        </p>
      </section>

      {/* TODO: Desenvolver o sistema de módulos e aulas */}
      <section className="px-20 py-10">
        {course.modules.map((moduleId) => (
          <Module key={moduleId} id={moduleId} />
        ))}
      </section>

      {/* TODO: Adicionar o cabeçalho dos professores */}
      <section className="mb-10 grid grid-cols-4 gap-6 px-36">
        {course.professors.map((professorId) => (
          <Professor key={professorId} id={professorId} />
        ))}
      </section>
    </main>
  )
}
