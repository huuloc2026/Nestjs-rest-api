import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UsersController {
    @Get()
    getAllUsers(){
        return [{
            name:'Jake',
            age: 18
        }, {
            name:'Loc',
            age: 20
        }]
    }
    @Post()
    createUser(){
        return ["Hello World"]
    }
}