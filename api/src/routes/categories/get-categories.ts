import { CategoriesController } from '@/controllers/categories-controller'
import { Router } from 'express'

const router = Router()
const categoriesController = new CategoriesController()

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: List all categories
 *     responses:
 *       '200':
 *         description: List all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *     tags:
 *       - Categories
 */
router.get('/', categoriesController.index)

export { router as getCategoriesRouter }
