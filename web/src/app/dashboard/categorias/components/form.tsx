'use client'

import type { CategoryProps } from '@/_types/category'
import { Input } from '@/components/ui/input'
import { IconSelect } from './icon-select'

interface Props {
  data: CategoryProps
}

export function FormCategory({ data }: Props) {
  return (
    <form className="flex w-full flex-col gap-4">
      <Input title="Nome da categoria" defaultValue={data.name} />
      <IconSelect />
    </form>
  )
}
