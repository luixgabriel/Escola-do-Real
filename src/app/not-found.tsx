import Button from "@/components/homepage/Button";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description:
    "Uma ONG voltada para a educação financeira de todos os brasileiros.",
};

export default function NotFound() {
  return (
    <>
      <section className="custom-py-section mx-auto my-0 grid max-w-3xl grid-cols-1 items-center gap-5 md:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/images/not-found/404-erro.svg"
            width={300}
            height={300}
            alt="Ilustração Error"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-center text-5xl font-bold text-blue-500">
            Erro 404
          </h1>
          <p className="m-4 text-center">
            Desculpe! Não encontramos a página que você tentou acessar
          </p>
          <Link href="/">
            <Button>Voltar</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
