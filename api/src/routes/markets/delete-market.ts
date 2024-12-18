import { MarketsController } from '@/controllers/markets-controller'
import { Router } from 'express'

const router = Router()
const marketsController = new MarketsController()

/**
 * @swagger
 * /markets/{id}:
 *   delete:
 *     summary: Delete market by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: market id
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Market deleted
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
router.delete('/:id', marketsController.show)

export { router as deleteMarketRouter }
