import Link from 'next/link'
import ButtonCTA from './ButtonCTA'
import SectionTitle from './SectionTitle'

export default function SectionCourse() {
  return (
    <section id="nosso-curso">
      <SectionTitle icon="/icons/study.svg">Nosso Curso</SectionTitle>
      <p className="mb-5 text-center">
        Apresentação do nosso projeto e como funciona o projeto social de
        educação financeira.
      </p>
      <section className="custom-mx-global custom-pt-iframe relative mb-7 flex w-4/5 justify-center ">
        <iframe
          className="absolute top-0 h-full w-full"
          width="1030"
          height="645"
          src="https://www.youtube.com/embed/LXb3EKWsInQ"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
      <Link href="/curso/economia-basica" className=" uppercase">
        <ButtonCTA>iniciar curso</ButtonCTA>
      </Link>
    </section>
  )
}
