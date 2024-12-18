import { MarketsController } from '@/controllers/markets-controller'
import { Router } from 'express'

const router = Router()
const marketsController = new MarketsController()

/**
 * @swagger
 * /markets/{id}:
 *   put:
 *     summary: Update market by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: market id
 *         schema:
 *           type: string
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
 *       '200':
 *         description: Market updated
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
router.put('/:id', marketsController.show)

export { router as updateMarketRouter }
