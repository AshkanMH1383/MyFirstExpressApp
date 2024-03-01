// Import Models
import UsersModel from "./UserModel";

// Import Dtos
import User from "./Dtos/UserDto";

export const getAllUsers = () =>{
    return new Promise ( (resolve, reject) => {
        UsersModel.find().then( (users) =>{
            resolve(users);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export const getOneUser = (id :string) =>{
    return new Promise ( (resolve, reject) => {
        UsersModel.findOne({_id: id}).then( (users) =>{
            resolve(users);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export const createNewUser = (user: User) =>{
    return new Promise ( (resolve, reject) => {
        UsersModel.create(user).then( (user:any) =>{
            resolve(user);
        })
        .catch((err) => {
            reject(err);
        })
    })
}


export const deleteOneUser = (id :string) =>{
    return new Promise ( (resolve, reject) => {
        UsersModel.findOneAndDelete({_id: id}).then( (user) =>{
            resolve(user);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export const updateOneUser = (id: string , user: User) =>{
    return new Promise ( (resolve, reject) => {
        UsersModel.findByIdAndUpdate(id, user).then( (u:any) =>{
            resolve(u);
        })
        .catch((err) => {
            reject(err);
        })
    })
}