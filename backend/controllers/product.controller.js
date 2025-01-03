import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProducts = async (req,res)=>{
    try {
        const products = await Product.find({});
        res.status(201).json({success:true,data:products})
    } catch (error) {
        console.log("Error in fetching products")
        res.status(500).json({success:false,message:"Internal server error"})
    }
}

export const createProduct = async (req,res)=>{
    const product = req.body;

    if(!product.name||!product.price||!product.image){
        return res.status(400).json({success:false,message:"please provide all fields"})
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save()
        return res.status(201).json({success:true,data:newProduct})
    } catch (error) {
        console.log("Error:",error.message)
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

export const updaeProduct = async(req,res)=>{
    const {id}=req.params;
    const product = req.body;
    console.log(req);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Product not found"})
    }
    try{
        await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(500).json({success:true,message:"Product details updated"})
    }catch(e){
        return res.status(500).json({success:false,message:"Internal server error"})
    }
}

export const deleteProduct = async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Product not found"})
    }
    try {
        await Product.findByIdAndDelete(id)
        return res.status(200).json({success:true,message:"Product deleted"})
    } catch (error) {
        return res.status(500).json({success:false,message:"Server Error"})
    }
}