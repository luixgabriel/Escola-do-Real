import { ILesson } from '@/interfaces/lesson'
import api from '@/server/api'
import { timeMask } from '@/utils/time-mask'
import Image from 'next/image'
import Link from 'next/link'

async function getLessons() {
  try {
    const response = await api.get('/aulas')
    const { data } = await response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Lesson({
  id,
  position,
}: {
  id: number
  position: number
}) {
  const lessons: ILesson[] = await getLessons()
  const lesson = lessons.find((lesson) => lesson.id === id)

  return (
    <div className="min-h-32 mb-4 cursor-pointer rounded-md border border-white p-3 hover:border-gray-100 hover:bg-slate-50 hover:shadow-md">
      <Link className="flex gap-5" href={`${lesson?.url}`} target="_blank">
        <Image
          className="hidden h-full w-36 rounded-md md:block"
          src={`${lesson?.thumb}`}
          alt="Thumb da aula"
          width={336}
          height={188}
        />
        <div>
          <div className="flex items-center gap-3 pt-3">
            <h3 className="text-lg font-medium">
              {position}. {lesson?.title}
            </h3>
            <span className="text-gray-500">
              {timeMask(lesson?.duration || 0)}
            </span>
          </div>
          <p className="text-gray-600">{lesson?.description}</p>
        </div>
      </Link>
    </div>
  )
}
