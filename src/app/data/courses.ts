import { ICourse } from '@/interfaces/course'

export const courses: ICourse[] = [
  {
    id: 1,
    slug: 'educacao-financeira',
    name: 'Educação financeira',
    banner: '/images/course/1-banner.png',
    about:
      'O Curso Escola do Real oferece uma oportunidade única de aprimoramento em educação financeira e economia, totalmente online e gratuito. Destinado a iniciantes e intermediários, o curso abrange desde planejamento financeiro e economia doméstica até tópicos avançados como investimentos em renda fixa e variável, macro e microeconomia, e criptomoedas. Com 8 módulos liberados aos pares e mais de 50 aulas, este curso é ideal para quem deseja melhorar sua saúde financeira e tomar decisões econômicas mais informadas. Faça parte e transforme a sua vida com conhecimento financeiro!',
    lessons: 5,
    duration: 1298,
    professors: [1, 2, 3, 4],
    modules: [1],
  },
]
