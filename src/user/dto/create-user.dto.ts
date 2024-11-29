import { Expose } from "class-transformer";
import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateUserDto {
    @Expose()
    @IsOptional()
    username: string

    @Expose()
    @IsOptional()
    password: string
     
    @Expose()
    @IsNotEmpty()
    link: string
}
