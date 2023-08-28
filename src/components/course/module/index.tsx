import { DownIcon } from '@/components/general/Icons'
import { Module as ModuleModel } from '@/model/Module'
import { timeMask } from '@/utils/time-mask'
import Lesson from './lesson'

export default function Module({
  module,
  position,
}: {
  module: ModuleModel
  position: number
}) {
  return (
    <div className="border-x border-t border-slate-400 px-10 py-6 first:rounded-t-lg last:rounded-b-lg last:border-b">
      <header className="mb-3 flex justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">
            {position}. {module.title}
          </h2>
          <span className="text-gray-500">
            {timeMask(module.duration || 0)}
          </span>
        </div>
        <DownIcon />
      </header>
      <p className="mb-8 text-gray-600">{module.description}</p>
      <div>
        {module.lessons.map((lesson, index) => (
          <Lesson key={lesson.id} lesson={lesson} position={index + 1} />
        ))}
      </div>
    </div>
  )
}
