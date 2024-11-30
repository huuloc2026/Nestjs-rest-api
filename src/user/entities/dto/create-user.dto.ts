import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @Expose()
    @IsNotEmpty({message: "email not is empty"})
    email: string

    @Expose()
    @IsNotEmpty()
    password: string
     

}
