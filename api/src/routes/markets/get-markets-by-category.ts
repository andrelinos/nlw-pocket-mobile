import { Router } from 'express'

import { MarketsController } from '@/controllers/markets-controller'

const router = Router()
const marketsController = new MarketsController()

/**
 * @swagger
 * /markets/category/{id}:
 *   get:
 *     summary: Get market by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: category id
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Get market by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 categoryId:
 *                   type: string
 *                 description:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 address:
 *                   type: string
 *                 cover:
 *                   type: string
 *                 latitude:
 *                   type: integer
 *                 longitude:
 *                   type: integer
 *                 coupons:
 *                   type: integer
 *     tags:
 *       - Markets
 */
router.get('/category/:category_id', marketsController.index)

export { router as getMarketsByCategoryRouter }
