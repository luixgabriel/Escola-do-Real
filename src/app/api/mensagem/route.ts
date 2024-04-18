import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const htmlEmailTemplate = (
  name: string,
  title: string,
  email: string,
  message: string,
) => {
  return `<div style="border: 2px solid gray; padding: 30px;">
  <p><strong>Autor</strong>: ${name}</p>
  <p><strong>Título</strong>: ${title}</p>
  <p><strong>Remetente</strong>: ${email}</p>
  <p><strong>Mensagem</strong>: ${message}</p>
  </div>`
}

export async function POST(request: NextRequest) {
  const { name, title, email, message } = await request.json()

  if (!name || !title || !email || !message) {
    return NextResponse.json(
      { erro: 'O conteúdo do body não foi passado de forma apropriada' },
      { status: 400 },
    )
  }

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { erro: 'O e-mail inserido não é válido' },
      { status: 400 },
    )
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'veterinariobackend@gmail.com',
      pass: 'khnnbgeapzjkbcce',
    },
  })

  try {
    const result = await transporter.sendMail({
      from: 'veterinariobackend@gmail.com',
      to: 'luis16757@gmail.com',
      subject: title,
      html: htmlEmailTemplate(name, title, email, message),
    })
    console.log(result)
    return NextResponse.json({ name, title, email, message }, { status: 201 })
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
