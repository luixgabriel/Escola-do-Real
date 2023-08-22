import Title from '../../general/Title'
import Image from 'next/image'

export default function Partners() {
  return (
    <section className='custom-py-section custom-mx-global'>
      <Title icon="/icons/hands.svg">Nossos Parceiros</Title>
      <div>
        <ul className='flex justify-between items-center gap-3 sm:flex-wrap'>
          <li><Image src='/images/logo-partners/vital.png' width={200} height={130} /></li>
          <li><Image src='/images/logo-partners/obecon.png' width={200} height={130} /></li>
          <li><Image src='/images/logo-partners/celeritas.png' width={200} height={130} /></li>
          <li><Image src='/images/logo-partners/olimpiadas.png' width={200} height={130} /></li>
        </ul>
      </div>
    </section>
  )
}