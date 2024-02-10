import mongoose from 'mongoose'

const { Schema } = mongoose;

const productSchema = new Schema({
  
    title: {type:String, required:true, unique:true}, 
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: {type:Number, min:0, max:[5, 'rating must be smaller than or equal to 5']}, // these restrictions called "validation"
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]

});

export const Product = mongoose.model('Product', productSchema)