'use client'

import { DownIcon } from '@/components/general/Icons'
import { ILesson } from '@/interfaces/lesson'
import { Module as ModuleModel } from '@/model/Module'
import { timeMask } from '@/utils/time-mask'
import { useState } from 'react'
import Lesson from './lesson'

interface ModuleProps {
  module: ModuleModel
  position: number
  handleSelection: (lesson: ILesson) => void
}

export default function Module({
  module,
  position,
  handleSelection,
}: ModuleProps) {
  const [open, setOpen] = useState<boolean>(false)
  const handleClick = () => setOpen((prev) => !prev)

  return (
    <div
      className={
        'border-x border-t border-slate-400 pt-6 last:border-b hover:bg-gray-50 md:pb-6 ' +
        (open && 'hover:bg-white md:pb-0')
      }
    >
      <div className="cursor-pointer px-10" onClick={handleClick}>
        <header className="mb-3 flex justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold">
              {position}. {module.title}
            </h2>
            <span className="hidden text-gray-500 md:block">
              {timeMask(module.duration || 0)}
            </span>
          </div>
          <div className={open ? 'rotate-180' : 'rotate-0'}>
            <DownIcon />
          </div>
        </header>
        <p className="text-gray-600">{module.description}</p>
      </div>
      {open && (
        <div className="mt-6">
          {module.lessons.map((lesson, index) => (
            <Lesson
              key={lesson.id}
              lesson={lesson}
              position={index + 1}
              handleSelection={handleSelection}
            />
          ))}
        </div>
      )}
    </div>
  )
}
