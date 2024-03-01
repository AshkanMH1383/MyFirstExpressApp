// Import Libs
import bcrypt from "bcrypt";

// Import Models
import UsersModel from "@Modules/User/UserModel";

// Import Dtos
import LoginDto from "./Dtos/LoginDto";
import RegisterDto from "./Dtos/RegisterDto";
import { encodeToken } from "@src/Utils";
import ServerError from "@src/Errors/ServerError";

// Methods
export const login = async(data: LoginDto) =>{
    const user = await UsersModel.findOne({email: data.email})
    if(!user) throw new ServerError(404,"User not found");

    const compare = await bcrypt.compare(data.password, `${user.password}`);
    if(!compare) throw new ServerError(400,"Invalid credentials");

    const token = encodeToken({id: user._id});
    return {token, user};
}

export const register = async (data: RegisterDto) =>{
    const user = await UsersModel.findOne({email: data.email})
    if(user) throw new ServerError(409,"User already exists")
    const hashedPassword = await bcrypt.hash(data.password,10);
    const newUser = await UsersModel.create({...data, password: hashedPassword})
    newUser.save();
    return newUser;
}