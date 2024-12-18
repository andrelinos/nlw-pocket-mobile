import { prisma } from '@/database/prisma'
import { AppError } from '@/utils/AppError'
import type { NextFunction, Request, Response } from 'express'
import { z } from 'zod'

class MarketsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        category_id: z.string().uuid(),
      })

      const { category_id } = paramsSchema.parse(request.params)

      const markets = await prisma.market.findMany({
        where: { categoryId: category_id },
        orderBy: { name: 'asc' },
      })

      return response.json(markets)
    } catch (error) {
      next(error)
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      const market = await prisma.market.findUnique({
        where: { id },
        include: {
          rules: true,
        },
      })

      if (!market) {
        throw new AppError('Estabelecimento não encontrado!', 404)
      }

      return response.json(market)
    } catch (error) {
      next(error)
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().min(1, 'Name is required'),
        categoryId: z.string().uuid('Invalid category ID'),
        description: z.string().min(1, 'Description is required'),
        coupons: z.coerce
          .number()
          .min(0, 'Coupons must be a non-negative number'),
        latitude: z.coerce
          .number()
          .refine(
            val => val >= -90 && val <= 90,
            'Latitude must be between -90 and 90'
          ),
        longitude: z.coerce
          .number()
          .refine(
            val => val >= -180 && val <= 180,
            'Longitude must be between -180 and 180'
          ),
        address: z.string().min(1, 'Address is required'),
        phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
        cover: z.string().url('Invalid URL format for cover image'),
      })

      const {
        name,
        categoryId,
        description,
        coupons,
        latitude,
        longitude,
        address,
        phone,
        cover,
      } = bodySchema.parse(request.body)

      const newMarket = await prisma.market.create({
        data: {
          name,
          categoryId,
          description,
          coupons,
          latitude,
          longitude,
          address,
          phone,
          cover,
        },
      })

      return response.status(201).json(newMarket)
    } catch (error) {
      if (error instanceof z.ZodError) {
        return response
          .status(400)
          .json({ message: 'Validation error', errors: error.errors })
      }
      next(error)
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const bodySchema = z.object({
        name: z.string().optional(),
        categoryId: z.string().uuid('Invalid category ID'),
        description: z.string().optional(),
        coupons: z.coerce.number().optional(),
        latitude: z.coerce
          .number()
          .refine(
            val => val >= -90 && val <= 90,
            'Latitude must be between -90 and 90'
          )
          .optional(),
        longitude: z.coerce
          .number()
          .refine(
            val => val >= -180 && val <= 180,
            'Longitude must be between -180 and 180'
          )
          .optional(),
        address: z.string().optional(),
        phone: z
          .string()
          .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
          .optional(),
        cover: z.string().url('Invalid URL format for cover image').optional(),
      })

      const { id } = paramsSchema.parse(request.params)
      const {
        name,
        categoryId,
        description,
        coupons,
        latitude,
        longitude,
        address,
        phone,
        cover,
      } = bodySchema.parse(request.body)

      const updatedMarket = await prisma.market.update({
        where: { id },
        data: {
          name,
          categoryId,
          description,
          coupons,
          latitude,
          longitude,
          address,
          phone,
          cover,
        },
      })

      return response.json(updatedMarket)
    } catch (error) {
      next(error)
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = paramsSchema.parse(request.params)

      await prisma.market.delete({
        where: { id },
      })

      return response.status(204).send()
    } catch (error) {
      next(error)
    }
  }
}

export { MarketsController }
