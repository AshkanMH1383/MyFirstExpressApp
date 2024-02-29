import { IsDefined, IsOptional, MaxLength, IsEmail, Length } from "class-validator";

class CreateUserDto {

    @MaxLength(20)
    @IsDefined()
    name : string;

    @IsDefined()
    @IsEmail()
    email: string;

    @IsDefined()
    @Length(8,20)
    password: string;

    @IsOptional()
    age: number;

}
export default CreateUserDto;