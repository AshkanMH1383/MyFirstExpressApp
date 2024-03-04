// Import Models
import ServerError from "@src/Errors/ServerError";
import CreateProductDto from "./Dtos/CreateProductDto";

// Import Dtos
import ProductModel from "./ProductModel";


export const getAllProducts = async () =>{
    const result = await ProductModel.find();
    return result;
}

export const getOneProduct = async (id :String) =>{
    const product = await ProductModel.findById(id);

    if(!product) {
        throw new ServerError(404, "Product not found");
    }

    return product;
}

export const createNewProduct = async (data : CreateProductDto) =>{
    const result = await ProductModel.create(data);
    return result;
}

export const updateProduct = async (id :String , data : CreateProductDto) =>{
    const product = await ProductModel.findByIdAndUpdate(id, data);
    if(!product) {
        throw new ServerError(404, "Product not found");
    }
    return product;
}

export const deleteProduct = async (id :String) =>{

    const product = await ProductModel.findOneAndDelete(id);

    return product;
}