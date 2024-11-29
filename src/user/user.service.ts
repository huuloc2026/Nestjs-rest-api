import { UserDto } from "src/user.dto"


export class UserService{
    createUser(user:any):any{
        user.id = 1
        user.createAt = new Date()
        user.updateAt = new Date()
        return UserDto.plainToInstance(user)
    }

}