import { Router } from 'express'

import { categoriesRoutes } from './categories'
import { couponsRoutes } from './coupons'
import { marketsRoutes } from './markets'

const routes = Router()

routes.use('/categories', categoriesRoutes)
routes.use('/markets', marketsRoutes)
routes.use('/coupons', couponsRoutes)

export { routes }
