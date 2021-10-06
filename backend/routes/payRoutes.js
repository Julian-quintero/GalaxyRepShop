import express from 'express'
import { ipn } from '../controller/ipnController.js'
import { payment } from '../controller/payController.js'
import { protect} from '../middleware/authMiddleware.js'
const router = express.Router()
router.route("/mercadopago").post(protect,payment)
router.post('/mercadopago/ipn',ipn)

export default router

