import express from 'express'
import asyncHadler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'

router.get('/', asyncHadler(async (req,res) => {
    const products = await Product.find({})

    res.json(products)
}))

router.get('/:id', asyncHadler(async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router