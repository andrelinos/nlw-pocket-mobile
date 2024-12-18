import { Router } from 'express'
import { createCategoryRouter } from './create-category'
import { deleteCategoryRouter } from './delete-category'
import { getCategoriesRouter } from './get-categories'
import { getCategoryRouter } from './get-category'
import { updateCategoryRouter } from './update-category'

const categoriesRoutes = Router()

categoriesRoutes.use(getCategoriesRouter)
categoriesRoutes.use(createCategoryRouter)
categoriesRoutes.use(getCategoryRouter)
categoriesRoutes.use(updateCategoryRouter)
categoriesRoutes.use(deleteCategoryRouter)

export { categoriesRoutes }
