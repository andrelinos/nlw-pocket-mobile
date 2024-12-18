import { prisma } from '@/database/prisma'
import type { NextFunction, Request, Response } from 'express'
import z from 'zod'

class CategoriesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const categories = await prisma.category.findMany({
        orderBy: { name: 'asc' },
      })

      return response.json(categories)
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().min(1, 'Name is required'),
      })

      const { name } = bodySchema.parse(request.body)

      const newCategory = await prisma.category.create({
        data: { name },
      })

      return response.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }

  async read(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params

      const category = await prisma.category.findUnique({
        where: { id },
      })

      if (!category) {
        return response.status(404).json({ message: 'Category not found!' })
      }

      return response.json(category)
    } catch (error) {
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params
      const { name } = request.body

      const updatedCategory = await prisma.category.update({
        where: { id },
        data: { name },
      })

      return response.json(updatedCategory)
    } catch (error) {
      next(error)
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params

      await prisma.category.delete({
        where: { id },
      })

      return response.status(204).send()
    } catch (error) {
      console.error(error)
      next(error)
    }
  }
}

export { CategoriesController }
