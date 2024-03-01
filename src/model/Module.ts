import { ILesson } from '@/interfaces/lesson'
import { IModule } from '@/interfaces/module'
import { lessons } from '../app/data/lessons'

export class Module {
  id: number
  title: string
  description: string
  duration: number
  lessons: ILesson[]

  constructor(module: IModule) {
    this.id = module.id
    this.title = module.title
    this.description = module.description
    this.duration = module.duration
    this.lessons = this.getLessons(module.lessons)
  }

  getLessons(id: number[]) {
    return lessons.filter((lesson: ILesson) => id.includes(lesson.id))
  }
}
