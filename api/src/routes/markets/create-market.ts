import { MarketsController } from '@/controllers/markets-controller'
import { Router } from 'express'

const router = Router()
const marketsController = new MarketsController()

/**
 * @swagger
 * /markets:
 *   post:
 *     summary: Create a new market
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               description:
 *                 type: string
 *               coupons:
 *                 type: number
 *               latitude:
 *                 type: number
 *               longitude:
 *                 type: number
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               cover:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Market created
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
 *                 coupons:
 *                   type: number
 *                 latitude:
 *                   type: number
 *                 longitude:
 *                   type: number
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 cover:
 *                   type: string
 *     tags:
 *       - Markets
 */
router.post('/', marketsController.create)

export { router as createMarketRouter }
