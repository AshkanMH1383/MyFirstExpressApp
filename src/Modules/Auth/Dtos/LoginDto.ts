import { IsDefined, IsEmail, Length } from "class-validator";

export default class LoginDto {

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @Length(8,20)
    password: string;

}
