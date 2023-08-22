'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Title from '../../general/Title'
import Button from '../Button'

interface contactForm {
  name: string
  email: string
  title: string
  message: string
}

export default function Message() {
  const [state, setState] = useState<contactForm>({
    name: '',
    email: '',
    title: '',
    message: '',
  })

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    setState({
      name: '',
      email: '',
      title: '',
      message: '',
    })
  }

  return (
    <section
      id="fale-conosco"
      className="custom-py-section"
      onSubmit={handleSubmit}
    >
      <Title icon="/icons/talk.svg">Fale Conosco</Title>
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            name="message"
            id="message"
            cols={30}
            rows={8}
            required
          ></textarea>
        </label>
        <div className="col-span-2 my-3">
          <Button>Enviar Mensagem!</Button>
        </div>
      </form>
    </section>
  )
}
