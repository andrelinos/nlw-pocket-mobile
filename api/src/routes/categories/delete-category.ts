import { CategoriesController } from '@/controllers/categories-controller'
import { Router } from 'express'

const router = Router()
const categoriesController = new CategoriesController()

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Delete category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the category
 *         schema:
 *           type: string
 *     responses:
 *       '204':
 *         description: Category deleted
 *       '404':
 *         description: Category not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category not found!
 *     tags:
 *       - Categories
 */
router.delete('/:id', categoriesController.delete)

export { router as deleteCategoryRouter }
