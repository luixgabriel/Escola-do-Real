import Image from 'next/image'

export default function SectionTitle({
  icon,
  children,
}: {
  icon?: string
  children: string
}) {
  return (
    <div className="mb-6 flex flex-col items-center">
      {icon && (
        <Image
          className="mb-3 w-12"
          src={icon}
          alt="Icone da seção"
          width={32}
          height={32}
        />
      )}
      <h2 className="inline-block border-b-4 border-green-500 px-4 pb-2 text-center text-2xl font-semibold text-blue-500">
        {children}
      </h2>
    </div>
  )
}
