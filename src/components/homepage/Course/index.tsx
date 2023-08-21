import Link from 'next/link'
import Title from '../../general/Title'
import Button from '../Button'

export default function Course() {
  return (
    <section id="nosso-curso" className="custom-py-section">
      <Title icon="/icons/study.svg">Nosso Curso</Title>
      <p className="mb-5 text-center">
        Apresentação do nosso projeto e como funciona o projeto social de
        educação financeira.
      </p>
      <div className="custom-mx-global custom-pt-iframe relative mb-7 flex w-4/5 justify-center ">
        <iframe
          className="absolute top-0 h-full w-full"
          width="1030"
          height="645"
          src="https://www.youtube.com/embed/LXb3EKWsInQ"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Link href="/curso/economia-basica">
        <Button>Iniciar Curso</Button>
      </Link>
    </section>
  )
}
