import { Router } from 'express'

import { CouponsController } from '@/controllers/coupons-controller'

const router = Router()
const couponsController = new CouponsController()

/**
 * @swagger
 * /coupons/{id}:
 *   patch:
 *     summary: Get coupon information
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            description: market id
 *            schema:
 *              type: string
 *     responses:
 *       '200':
 *         description: Get a coupon redeemed by the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 coupon:
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
 *       '400':
 *         description: There are no coupons available right now!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: There are no coupons available right now!
 *     tags:
 *       - Coupons
 */

// couponsRoutes.patch("/:market_id", couponsController.update);

// export { couponsRoutes };

router.patch('/:market_id', couponsController.update)

export { router as updateCouponRouter }
