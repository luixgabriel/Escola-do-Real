import { DownIcon } from '@/components/Icons'
import { IModule } from '@/interfaces/module'
import api from '@/server/api'
import { timeMask } from '@/utils/time-mask'
import Lesson from './lesson'

async function getModules() {
  try {
    const response = await api.get('/modulos')
    const { data } = await response.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Module({
  id,
  position,
}: {
  id: number
  position: number
}) {
  const modules: IModule[] = await getModules()
  const thisModule = modules.find((module) => module.id === id)
  return (
    <div className="mb-6 rounded-xl border border-slate-100 px-10 py-6 shadow-md">
      {/* TODO: Criar o sistema de accordion */}
      <header className="mb-3 flex justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold">
            {position}. {thisModule?.title}
          </h2>
          <span className="text-gray-500">
            {timeMask(thisModule?.duration || 0)}
          </span>
        </div>
        <DownIcon />
      </header>
      <p className="mb-8 text-gray-600">{thisModule?.description}</p>
      <div>
        {thisModule?.lessons.map((lesson, index) => (
          <Lesson key={lesson} id={lesson} position={index + 1} />
        ))}
      </div>
    </div>
  )
}
