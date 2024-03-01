import Modules from '@/components/course/modules'
import Professor from '@/components/course/professor'
import { ClockIcon, VideoIcon } from '@/components/general/Icons'
import Title from '@/components/general/Title'
import { ICourse } from '@/interfaces/course'
import { Course as CourseModel } from '@/model/Course'
import { timeMask } from '@/utils/time-mask'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { courses } from '../../data/courses'
import { professors } from '../../data/professors'
import { modules } from '../../data/modules'
import { Module as ModuleModel } from '@/model/Module'

interface MetadataProps {
  params: { slug: string }
}

// async function getCourseBySlug(slug: string) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_PATHNAME}/api/cursos/${slug}`,
//     {
//       mode: 'cors',
//       headers: { origin: process.env.NEXT_PUBLIC_PATHNAME || '' },
//     },
//   )
//   if (response.status !== 200) notFound()
//   const { data } = await response.json()
//   return data
// }

// export async function generateMetadata({ params }: MetadataProps) {
//   const course: ICourse = await getCourseBySlug(params.slug)
//   const metadata: Metadata = {
//     title: `Curso - ${course.name}`,
//     description: course.about,
//   }
//   return metadata
// }

export default async function Course({ params }: { params: { slug: string } }) {
  // const course: CourseModel = await getCourseBySlug(params.slug)
  const moudulesCreate = new ModuleModel(modules[0])
  const moudulesCreate1 = new ModuleModel(modules[1])
  const moudulesCreate2 = new ModuleModel(modules[2])

  const modulesArray = [moudulesCreate, moudulesCreate1, moudulesCreate2]
  return (
    <>
      <div>
        <Image
          className="mb-10 h-36 object-cover md:h-auto md:w-full"
          src={courses[0].banner}
          alt="Banner do curso"
          width={1440}
          height={360}
          loading="eager"
        />
      </div>

      <section className="md:custom-mx-global mx-6">
        <h1 className="pb-4 text-2xl font-semibold text-blue-700 md:pb-2 md:text-3xl">
          {courses[0].name}
        </h1>
        <p className="flex flex-col gap-3 font-medium text-gray-600 md:flex-row">
          <span className="flex items-center gap-1">
            <VideoIcon />
            {courses[0].lessons}
          </span>
          <span className="hidden md:block">&#x2022;</span>
          <span className="flex items-center gap-1">
            <ClockIcon />
            {timeMask(courses[0].duration)}
          </span>
        </p>
        <p className="mb-4 mt-3 text-base font-normal text-gray-700">
          {courses[0].about}
        </p>
      </section>

      <Modules modules={modulesArray} />

      <section className="mb-24 mt-16 px-[20%]">
        <Title icon="/icons/hands.svg">Nossos Professores</Title>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {professors.map((professor) => (
            <Professor key={professor.id} professor={professor} />
          ))}
        </div>
      </section>
    </>
  )
}
