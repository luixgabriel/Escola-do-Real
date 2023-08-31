import { PlayIcon } from '@/components/general/Icons'
import { ILesson } from '@/interfaces/lesson'
import { timeMask } from '@/utils/time-mask'
import Image from 'next/image'

interface LessonProps {
  lesson: ILesson
  position: number
  handleSelection: (lesson: ILesson) => void
}

export default function Lesson({
  lesson,
  position,
  handleSelection,
}: LessonProps) {
  return (
    <div
      className="min-h-32 flex cursor-pointer gap-5 border-t border-gray-200 px-10 py-6 hover:bg-gray-50"
      onClick={() => handleSelection(lesson)}
    >
      <div className="relative">
        <Image
          className="relative hidden h-full w-44 rounded-md brightness-75 filter md:block"
          src={`${lesson?.thumb}`}
          alt="Thumb da aula"
          width={336}
          height={188}
        />
        <PlayIcon />
      </div>
      <div>
        <div className="flex items-center gap-3 pt-3">
          <h3 className="text-lg font-medium">
            {position}. {lesson?.title}
          </h3>
          <span className="hidden text-gray-500 md:block">
            {timeMask(lesson?.duration || 0)}
          </span>
        </div>
        <p className="hidden text-gray-600 md:block">{lesson?.description}</p>
      </div>
    </div>
  )
}
