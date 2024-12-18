import { Router } from 'express'
import { updateCouponRouter } from './update-coupons'

const couponsRoutes = Router()

couponsRoutes.use('/:market_id', updateCouponRouter)

export { couponsRoutes }
