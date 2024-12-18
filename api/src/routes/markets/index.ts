import { Router } from 'express'

import { createMarketRouter } from './create-market'
import { deleteMarketRouter } from './delete-market'
import { getMarketRouter } from './get-market'
import { getMarketsByCategoryRouter } from './get-markets-by-category'
import { updateMarketRouter } from './update-market'

const marketsRoutes = Router()

marketsRoutes.use(createMarketRouter)
marketsRoutes.use(deleteMarketRouter)
marketsRoutes.use(getMarketRouter)
marketsRoutes.use(updateMarketRouter)
marketsRoutes.use(getMarketsByCategoryRouter)

export { marketsRoutes }
