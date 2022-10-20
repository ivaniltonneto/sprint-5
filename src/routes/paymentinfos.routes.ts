import { Router } from 'express'
import { createPaymentInfoController } from '../controllers/paymentInfos.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'

const paymentInfosRoutes = Router()

paymentInfosRoutes.post('', ensureAuthMiddleware, createPaymentInfoController)

export default paymentInfosRoutes