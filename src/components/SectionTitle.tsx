// TODO: Inserir o ícone acima do título da página

export default function SectionTitle({ children }: { children: string }) {
  return (
    <div className="mb-6 flex justify-center">
      <h2 className="inline-block border-b-4 border-green-500 px-4 pb-2 text-2xl font-semibold text-blue-500">
        {children}
      </h2>
    </div>
  )
}
