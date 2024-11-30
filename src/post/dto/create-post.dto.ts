import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {
    @Expose()
    @IsNotEmpty()
    @IsString()
    author: string;
}
