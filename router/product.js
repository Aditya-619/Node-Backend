import express  from "express";
import { 
    createProduct, 
    getAllProducts, 
    getSingleProduct, 
    removeProduct, 
    replaceProduct, 
    updateProduct
} from '../controller/product.js'

const productRouter = express.Router()

productRouter.post('/', createProduct)
productRouter.get('/', getAllProducts)
productRouter.get('/:id', getSingleProduct)
productRouter.put('/:id', updateProduct)
productRouter.patch('/:id', replaceProduct)
productRouter.delete('/:id', removeProduct)

export { productRouter }