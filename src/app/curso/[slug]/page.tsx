import { ClockIcon, VideoIcon } from '@/components/Icons'
import SectionTitle from '@/components/SectionTitle'
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

export default async function Curso({ params }: { params: { slug: string } }) {
  const course: ICourse = await getCourseBySlug(params.slug)

  return (
    <>
      <div>
        <Image
          className="mb-10 w-full"
          src={course.banner}
          alt="Banner do curso"
          width={1440}
          height={360}
          loading="eager"
        />
      </div>

      <section className="custom-mx-global">
        <h1 className="pb-2 text-3xl font-semibold text-blue-700">
          Cuso de {course.name}
        </h1>
        <p className="flex font-medium text-gray-600">
          <span className="mr-3 flex items-center gap-1">
            <VideoIcon />
            {course.lessons} Aulas
          </span>
          &#x2022;
          <span className="ml-2 flex items-center gap-1">
            <ClockIcon />
            {timeMask(course.duration)}
          </span>
        </p>
        <p className="py-2 text-base font-normal text-gray-700">
          {course.about}
        </p>
      </section>

      <main className="custom-mx-global py-10">
        {course.modules.map((moduleId, index) => (
          <Module key={moduleId} id={moduleId} position={index + 1} />
        ))}
      </main>

      <section className="mb-24 mt-16 px-[20%]">
        <SectionTitle icon="/icons/hands.svg">Nossos Professores</SectionTitle>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {course.professors.map((professorId) => (
            <Professor key={professorId} id={professorId} />
          ))}
        </div>
      </section>
    </>
  )
}
