import Title from "../../general/Title";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="custom-py-section custom-mx-global">
      <Title icon="/icons/hands.svg">Nossos Parceiros</Title>
      <div>
        <ul className="grid items-center justify-between gap-3 sm:grid-cols-2 md:grid-cols-4">
          <li>
            <Image
              src="/images/logo-partners/vital.png"
              alt="Logo Parceiros"
              width={200}
              height={130}
            />
          </li>
          <li>
            <Image
              src="/images/logo-partners/obecon.png"
              width={200}
              height={130}
              alt="Logo Parceiros"
            />
          </li>
          <li>
            <Image
              src="/images/logo-partners/celeritas.png"
              width={200}
              height={130}
              alt="Logo Parceiros"
            />
          </li>
          <li>
            <Image
              src="/images/logo-partners/olimpiadas.png"
              width={200}
              height={130}
              alt="Logo Parceiros"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
