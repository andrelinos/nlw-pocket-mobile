import type { Express } from 'express-serve-static-core'
import swaggerJsdoc from 'swagger-jsdoc'
import { serve, setup } from 'swagger-ui-express'

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.0',
    info: {
      title: 'Nearby API',
      version: '0.1.0',
      description: 'API para mostrar comércios próximos a você',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Andrelino Silva',
        url: 'https://andrelino.dev',
        email: 'andrelinodev@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3333',
      },
    ],
  },
  apis: [
    './src/routes/categories/*.ts',
    './src/routes/coupons/*.ts',
    './src/routes/markets/*.ts',
  ],
}

const doc = {
  info: {
    title: 'Nearby API',
    description: 'API para mostrar comércios próximos a você',
  },
  host: 'localhost:3333',
  schemes: ['http'],
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)

export const swaggerConfig = (app: Express) => {
  app.use('/docs', serve, setup(swaggerDocs, { explorer: true }))
}
