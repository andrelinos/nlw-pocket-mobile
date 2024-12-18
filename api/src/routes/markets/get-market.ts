import { MarketsController } from '@/controllers/markets-controller'
import { Router } from 'express'

const router = Router()
const marketsController = new MarketsController()

/**
 * @swagger
 * /markets/{id}:
 *   get:
 *     summary: Get market by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: market id
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
 *                 category:
 *                   type: string
 *       '404':
 *         description: Market not found!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Market not found!
 *     tags:
 *       - Markets
 */
router.get('/:id', marketsController.show)

export { router as getMarketRouter }
