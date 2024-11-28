import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { UserDto } from "src/user.dto";

@Controller('users')
export class UsersController {

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
    
    @Post()
    createUser(@Body() user: UserDto): UserDto {
        // const userReal = plainToClass(UserDto,user,{excludeExtraneousValues: true})
        // console.log(userReal)

        user.id = 1
        user.createAt = new Date()
        user.updateAt = new Date()

        return UserDto.plainToInstance(user)
    }
}