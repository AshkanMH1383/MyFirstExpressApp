// Import Libs
import bcrypt from "bcrypt";

// Import Models
import UsersModel from "@Modules/User/UserModel";

// Import Dtos
import LoginDto from "./Dtos/LoginDto";
import RegisterDto from "./Dtos/RegisterDto";
import { encodeToken } from "@src/Utils";

// Methods
export const login = async(data: LoginDto) =>{
    try {
        const user = await UsersModel.findOne({email: data.email})
        if(!user) throw new Error("User not found");

        const compare = await bcrypt.compare(data.password, `${user.password}`);
        if(!compare) throw new Error("Invalid credentials");

        const token = encodeToken({id: user._id});
        
        return {token, user};

    } catch (err: any) {
        console.log(err.message);
    }
    
}


export const register = async (data: RegisterDto) =>{
    try {
        const user = await UsersModel.findOne({email: data.email})
        if(user) throw new Error("User already exists")
        const hashedPassword = await bcrypt.hash(data.password,10);
        const newUser = await UsersModel.create({...data, password: hashedPassword})
        newUser.save();
        return newUser;
    } catch (error) {
        console.log(error)
    }
    
}