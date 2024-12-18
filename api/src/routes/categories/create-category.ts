import { CategoriesController } from '@/controllers/categories-controller'
import { Router } from 'express'

const router = Router()
const categoriesController = new CategoriesController()

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Category created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *     tags:
 *       - Categories
 */
router.post('/', categoriesController.create)

export { router as createCategoryRouter }
