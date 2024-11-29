import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { UserDto } from "src/user.dto";
import { UserService } from "./user.service";
import { plainToInstance } from "class-transformer";


@Controller('users')
export class UsersController {
    // constructor(private moduleRef: ModuleRef){}
    
    constructor(private readonly userService:UserService){
    }
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        // const userService = this.moduleRef.get(UserService)
        //another way 
        // return this.userService.createUser(user)
        return plainToInstance(UserDto,this.userService.createUser(user))
    }
}