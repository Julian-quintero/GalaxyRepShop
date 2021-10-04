import express from 'express'
import { ipn } from '../controller/ipnController.js'
import { payment } from '../controller/payController.js'
const router = express.Router()
router.post('/mercadopago',payment)
router.post('/mercadopago/ipn',ipn)

export default router

