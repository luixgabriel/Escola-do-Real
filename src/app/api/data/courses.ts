import { ICourse } from '@/interfaces/course'

export const courses: ICourse[] = [
  {
    id: 1,
    slug: 'economia-basica',
    name: 'Economia Básica',
    banner: '/images/course/1-banner.png',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis velit a auctor varius. Vestibulum imperdiet sodales posuere. Fusce eu enim sit amet nisi placerat commodo vel ut erat. Nam a porttitor nulla, quis scelerisque ex. Quisque efficitur magna at nulla luctus faucibus. Donec iaculis neque ut orci congue maximus. Sed ultricies lorem vel blandit gravida. Quisque nibh libero, ullamcorper non leo et, tincidunt luctus orci. Sed pellentesque a metus aliquam ultrices. Praesent egestas, ipsum vitae laoreet vestibulum, lorem justo iaculis libero, et feugiat neque augue id nunc. In hac habitasse platea dictumst. Donec tempus convallis semper. Morbi efficitur, est vitae venenatis consectetur, nunc sapien hendrerit arcu, sed vulputate ante lectus a nulla. Etiam sit amet finibus dolor, vitae varius ligula.',
    lessons: 27,
    duration: 1298,
    professors: [1, 2, 3, 4],
    modules: [1, 2, 3],
  },
]
