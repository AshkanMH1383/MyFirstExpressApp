import { IsDefined, MaxLength, IsEmail, Length } from "class-validator";

export default class RegisterDto {

    @MaxLength(20)
    @IsDefined()
    name : string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @Length(8,20)
    password: string;

}
