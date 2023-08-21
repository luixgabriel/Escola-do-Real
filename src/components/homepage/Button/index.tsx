export default function Button({ children }: { children: string }) {
  return (
    <button className="m-auto block rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-10 py-3 uppercase text-white">
      {children}
    </button>
  )
}
