import { ICourse } from '@/interfaces/course'
import { IModule } from '@/interfaces/module'
import { IProfessor } from '@/interfaces/professor'
import { Module } from './Module'
import { professors } from '../app/data/professors'
import { modules } from '../app/data/modules'

export class Course {
  id: number
  slug: string
  name: string
  banner: string
  about: string
  lessons: number
  duration: number
  professors: IProfessor[]
  modules: Module[]

  constructor(course: ICourse) {
    this.id = course.id
    this.slug = course.slug
    this.name = course.name
    this.banner = course.banner
    this.about = course.about
    this.lessons = course.lessons
    this.duration = course.duration
    this.professors = this.getProfessors(course.professors)
    this.modules = this.getModules(course.modules)
  }

  getProfessors(id: number[]) {
    return professors.filter((professor: IProfessor) =>
      id.includes(professor.id),
    )
  }

  getModules(id: number[]) {
    const listModules = modules.filter((module: IModule) =>
      id.includes(module.id),
    )
    return listModules.map((module) => new Module(module))
  }
}
