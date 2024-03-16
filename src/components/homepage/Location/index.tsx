import Title from '../../general/Title'
import Card from './Card'

const data = [
  {
    src: '/icons/globe.svg',
    alt: 'globe icon',
    title: 'Missão',
    text: 'Seja por meio de aulas em escolas, cursos gratuitos e projetos diversos, buscamos democratizar a educação financeira, especialmente entre os jovens, para impactar o futuro de nosso país e tornar o ensino cada vez mais acessível.',
  },
  {
    src: '/icons/hands.svg',
    alt: 'hands icon',
    title: 'Conexão',
    text: 'Acreditamos que a educação financeira é um direito fundamental. É por isso que estamos comprometidos em conectar o conhecimento econômico com cidadãos brasileiros e instituições de ensino, ajudando a construir um futuro financeiramente mais seguro para todos.',
  },
  // {
  //   src: '/icons/location.svg',
  //   alt: 'location icon',
  //   title: 'Estrutura',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  // },
  {
    src: '/icons/talk.svg',
    alt: 'talk icon',
    title: 'Educação',
    text: 'Através da simplificação de conceitos econômicos, promovemos um aprendizado contínuo e acessível, capacitando indivíduos de todas as profissões, idades e condições socioeconômicas a alcançarem saúde financeira plena.',
  },
]

export default function Location() {
  return (
    <section className="custom-py-section" id="onde-atuamos">
      <Title icon="/icons/location.svg">Onde Atuamos</Title>
      <h3 className="h-60 w-full bg-people-backgroud bg-cover bg-center px-10 py-10 text-center text-2xl font-bold text-white md:py-16 md:text-3xl">
        Capacitação de Pessoas para um Futuro <br /> Financeiramente
        Sustentável!
      </h3>
      <section className="mx-[13%] mt-12 flex justify-center gap-6">
        {data.map((item) => (
          <Card key={item.src} item={item} />
        ))}
      </section>
    </section>
  )
}
