import { IsDefined, IsOptional, MaxLength, IsEmail, Length } from "class-validator";

export default class CreateProductDto {

    @MaxLength(24)
    @IsDefined()
    title : string;

    @IsDefined()
    description: string;

    @IsDefined()
    @Length(8,20)
    price: Number;

    @IsOptional()
    tags:String[];

    @IsOptional()
    user:string;
    

}
