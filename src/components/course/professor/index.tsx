import { IProfessor } from '@/interfaces/professor'
import Image from 'next/image'

export default function Professor({ professor }: { professor: IProfessor }) {
  return (
    <div className="mt-6 flex flex-col items-center">
      <Image
        className="w-18 min-w-12 mb-3"
        src={professor.image || ''}
        alt={`Foto de ${professor.name}`}
        width={143}
        height={143}
      />
      <p className="mb-1 text-lg font-medium">{professor.name}</p>
      <span className="text-gray-600">{professor.subject}</span>
    </div>
  )
}
