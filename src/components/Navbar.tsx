import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="custom-mx-global pb-6 text-base font-bold">
      <ul className="flex justify-between border-b-2 border-green-500 py-6">
        <li>
          <a href="#" target="_top" className="flex items-center gap-2">
            <Image
              src="/icons/globe.svg"
              height={35}
              width={35}
              alt="globe icon"
            />
            <span>Conheça a Escola do Real</span>
          </a>
        </li>
        <li className="flex">
          <a
            href="#onde_atuamos"
            target="_parent"
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/location.svg"
              height={35}
              width={25.65}
              alt="location icon"
            />
            <span>Onde Atuamos</span>
          </a>
        </li>
        <li className="flex">
          <a
            href="#nosso_curso"
            target="_parent"
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/hands.svg"
              height={35}
              width={35}
              alt="hands icon"
            />
            <span>Nosso curso</span>
          </a>
        </li>
        <li className="flex">
          <a
            href="#fale_conosco"
            target="_parent"
            className="flex items-center gap-2"
          >
            <Image
              src="/icons/talk.svg"
              height={35}
              width={35}
              alt="talk icon"
            />
            <span>Fale conosco</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
