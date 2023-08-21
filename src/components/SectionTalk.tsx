'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import ButtonCTA from './ButtonCTA'
import SectionTitle from './SectionTitle'

export default function SectionTalk() {
  const [state, setState] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  })

  const handleState = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <section
      id="fale-conosco"
      className="custom-py-section"
      onSubmit={handleSubmit}
    >
      <SectionTitle icon="/icons/talk.svg">Fale Conosco</SectionTitle>
      <h3 className="h-60 w-full bg-talk-backgroud bg-cover bg-center px-36 py-12 pb-16 text-center text-3xl font-bold text-white">
        Se você tem alguma dúvida ou precisa de informações específicas, fique à
        vontade para perguntar.
      </h3>
      <form className="relative mx-auto -mt-20 grid w-3/5 grid-cols-2 gap-4 rounded-lg bg-white p-6 shadow-lg">
        <label className="flex flex-col gap-2" htmlFor="name">
          Nome
          <input
            className="rounded-sm bg-slate-100 p-2"
            value={state.name}
            onChange={handleState}
            type="text"
            name="name"
            id="name"
            required
          />
        </label>

        <label className="flex flex-col gap-2" htmlFor="email">
          E-mail{' '}
          <input
            className="rounded-sm bg-slate-100 p-2"
            value={state.email}
            onChange={handleState}
            type="email"
            name="email"
            id="email"
            required
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2" htmlFor="title">
          Título
          <input
            className="rounded-sm bg-slate-100 p-2"
            value={state.title}
            onChange={handleState}
            id="title"
            name="title"
            type="text"
            required
          />
        </label>

        <label className="col-span-2 flex flex-col gap-2" htmlFor="message">
          Mensagem
          <textarea
            className="rounded-sm bg-slate-100 p-2"
            value={state.message}
            onChange={handleState}
            name="message"
            id="message"
            cols={30}
            rows={8}
            required
          ></textarea>
        </label>
        <div className="col-span-2 my-3">
          <ButtonCTA>Enviar Mensagem!</ButtonCTA>
        </div>
      </form>
    </section>
  )
}
