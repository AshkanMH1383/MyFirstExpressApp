import { IsDefined, IsOptional, MaxLength, IsEmail, Length } from "class-validator";

export default class UpdateProductDto {

    @MaxLength(20)
    @IsDefined()
    title : string;

    @IsDefined()
    @IsEmail()
    description: string;

    @IsDefined()
    @Length(8,20)
    price: Number;

    @IsOptional()
    tags:[String];

}
