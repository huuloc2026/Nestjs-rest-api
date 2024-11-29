import { BaseDto } from "src/base.dto";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";

export class UserDto extends BaseDto {
    @IsNotEmpty()
    @Expose()
    username: string;                                               
    @IsNotEmpty()
    @Expose()
    password: string;
}