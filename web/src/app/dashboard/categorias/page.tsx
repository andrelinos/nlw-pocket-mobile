import type { CategoryProps } from '@/_types/category'
import { Modal } from '@/components/modal'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { api } from '@/services/api'
import { IconTrash } from '@tabler/icons-react'
import { FormCategory } from './components/form'

export default async function Categories() {
  const { data: categories } = await api.get<CategoryProps[]>('/categories')

  console.log('Categories :: ', categories)

  return (
    <div className="flex w-full">
      <Table>
        <TableCaption>Sua lista de categorias.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Ícone</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.map(category => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.iconId}</TableCell>
              <TableCell className="w-32 justify-end gap-2 text-right">
                <Modal title={category.name} subTitle="Edite sua categoria">
                  <FormCategory data={category} />
                </Modal>
                <Button variant="destructive" className="ml-2">
                  <IconTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
