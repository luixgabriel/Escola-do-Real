import Link from 'next/link'
import Title from '../../general/Title'
import Button from '../Button'

export default function Course() {
  return (
    <section id="nosso-curso" className="custom-py-section">
      <Title icon="/icons/study.svg">Nosso Curso</Title>
      <p className="mb-5 px-10 text-center">
        O nosso curso é abrangente, orientado e completamente gratuito. Com uma
        abordagem prática, permitimos que você ponha em prática os ensinamentos
        adquiridos no seu dia a dia e desenvolva suas habilidades de gestão
        financeira.
      </p>
      <div className="md:custom-pt-iframe md:custom-mx-global relative mb-7 flex h-[14.5rem] w-full justify-center md:w-4/5 ">
        <iframe
          className="absolute top-0 h-full w-full"
          loading="lazy"
          width="1030"
          height="645"
          src="https://www.youtube.com/embed/C-m_0Hi52o0?si=MF9o-5P-ZKKHqIqf"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="/curso/educacao-financeira">
        <Button>Iniciar Curso</Button>
      </Link>
    </section>
  )
}
