import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { UserDto } from "src/user.dto";
import { UserService } from "./user.service";
import { ModuleRef } from "@nestjs/core";

@Controller('users')
export class UsersController {
    // constructor(private moduleRef: ModuleRef){
    // }
    constructor(private readonly userService:UserService){
    }
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        // const userService = this.moduleRef.get(UserService)
        //another way 

        return this.userService.createUser(user)
    }
    @Get()
    getAllUsers() {
        return [{
            name: 'Jake',
            age: 18
        }, {
            name: 'Loc',
            age: 20
        }]
    }

    @Get(':id')
    getUserbyId(@Param('id') id: number) {
        console.log(id)
        return 'test by id'
    }
}