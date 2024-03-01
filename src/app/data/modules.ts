import { IModule } from '@/interfaces/module'

export const modules: IModule[] = [
  {
    id: 1,
    title: 'Introdução a Educação Financeira',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis velit a auctor varius. Vestibulum imperdiet sodales posuere. Fusce eu enim sit amet nisi placerat commodo vel ut erat.',
    duration: 47,
    lessons: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: 'Conceitos de Educação Financeira',
    description:
      'Nam a porttitor nulla, quis scelerisque ex. Quisque efficitur magna at nulla luctus faucibus. Donec iaculis neque ut orci congue maximus. Sed ultricies lorem vel blandit gravida. Quisque nibh libero, ullamcorper non leo et, tincidunt luctus orci.',
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
