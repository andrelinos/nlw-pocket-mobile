import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { IconPencil } from '@tabler/icons-react'
import type { ReactNode } from 'react'

interface Props {
  title: string
  subTitle: string
  children: ReactNode
}

export function Modal({ title, subTitle, children }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconPencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subTitle}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        <DialogFooter>
          <DialogClose>
            <Button type="button">Cancelar</Button>
          </DialogClose>
          <Button type="button">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
