import Image from 'next/image'
import Title from '../../general/Title'
import { professors } from '../../../app/data/professors'

const data = [
  {
    src: '/images/logo-partners/vital.png',
    alt: 'Logo do Parceiro 1',
  },
  {
    src: '/images/logo-partners/obecon.png',
    alt: 'Logo do Parceiro 2',
  },
  {
    src: '/images/logo-partners/celeritas.png',
    alt: 'Logo do Parceiro 3',
  },
  {
    src: '/images/logo-partners/olimpiadas.png',
    alt: 'Logo do Parceiro 4',
  },
]

export default function Partners() {
  return (
    <section className="custom-py-section custom-mx-global">
      <Title icon="/icons/hands.svg">Nossos Fundadores</Title>
      <div>
        <ul className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
          {data.map((item, index) => (
            <div
              className="mt-6 flex flex-col items-center lg:gap-1"
              key={index}
            >
              <Image
                className="mb-2"
                src={professors[0].image || ''}
                alt={`Foto de ${professors[0].name}`}
                width={143}
                height={143}
              />
              <p className="mb-1 text-center text-lg font-medium">
                {professors[0].name}
              </p>
              <span className="text-center text-gray-600">
                {professors[0].subject}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}
