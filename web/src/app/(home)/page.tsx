import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { IconBrandGoogleFilled } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <ScrollArea className="relative flex min-h-screen w-full flex-col items-center justify-between bg-brand-green-500 pt-8">
      <div className="z-10 mx-auto flex flex-col items-center justify-center gap-8 p-6">
        <Image
          src="/images/logo-home.svg"
          alt="Logo"
          width={216}
          height={216}
        />

        <header>
          <h2 className="w-full text-center font-bold text-2xl">
            Boas vindas à central de controle Nearby!
          </h2>
          <p className="pt-2 pb-6 text-center text-zinc-100">
            Aqui você cadastra, altera ou remove estabelecimentos
          </p>
        </header>
        <form className="z-10 w-full max-w-md rounded-lg bg-white bg-opacity-50 p-6 shadow-lg">
          <div className="space-y-4 pb-8">
            <Label>Informe suas credenciais de login</Label>
            <Input title="E-mail" type="email" />
            <Input title="Senha" type="password" />
          </div>
          <div className="space-y-4">
            <Link href="/dashboard">
              <Button className="h-12 w-full bg-brand-green-500">
                Acessar
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                type="button"
                className="flex h-12 w-full items-center bg-brand-green-500 p-0"
              >
                <IconBrandGoogleFilled size={44} /> Entrar com o Google
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-96">
        <Image src="/images/bottom-home-img.png" alt="Logo" layout="fill" />
      </div>
    </ScrollArea>
  )
}
