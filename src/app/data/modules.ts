import { IModule } from '@/interfaces/module'

export const modules: IModule[] = [
  {
    id: 1,
    title: 'Introdução a Educação Financeira',
    description:
      'Na primeira unidade de nosso curso, você será guiado pelos primeiros passos no mundo das finanças pessoais, conhecendo a importância do estudo de educação financeira e aprendendo a gerenciar seu dinheiro de forma mais eficaz.',
    duration: 47,
    lessons: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: 'Conceitos de Educação Financeira',
    description:
      'Nesse módulo, iremos abordar  alguns conceitos iniciais imprescindíveis para você aprimorar seus conhecimentos sobre gestão financeira pessoal e entender mais a respeito do funcionamento da economia.',
    duration: 213,
    lessons: [6, 7, 8, 9],
  },
  {
    id: 3,
    title: 'Como Investir Seu Dinheiro',
    description:
      'Sed pellentesque a metus aliquam ultrices. Praesent egestas, ipsum vitae laoreet vestibulum, lorem justo iaculis libero, et feugiat neque augue id nunc. In hac habitasse platea dictumst.',
    duration: 182,
    lessons: [13, 14, 15, 16, 17, 18, 19, 20],
  },
]
