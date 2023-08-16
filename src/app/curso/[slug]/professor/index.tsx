import { IProfessor } from '@/interfaces/professor'
import api from '@/server/api'
import Image from 'next/image'

async function getProfessor() {
  try {
    const response = await api.get(`/professores`)
    const { data } = await response.data
    return data
  } catch (err) {
    console.log(err)
  }
}

export default async function Professor({ id }: { id: number }) {
  const professorList: IProfessor[] = await getProfessor()
  const professor = professorList.find((professor) => professor.id === id)
  return (
    <div className="mt-6 flex flex-col items-center">
      <Image
        className="mb-3 w-2/5"
        src={professor?.image || ''}
        alt={`Foto de ${professor?.name}`}
        width={143}
        height={143}
      />
      <p className="mb-1 text-lg font-medium">{professor?.name}</p>
      <span className="text-gray-600">{professor?.subject}</span>
    </div>
  )
}
