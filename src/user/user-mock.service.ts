import { UserDto } from "src/user.dto";

export class UsersMockService {
    createUser(user:UserDto):UserDto{
        return {
            id: 1,
            username: "Mock name",
            password: "Mock pass",
            createAt: new Date(),
            updateAt: new Date(),
        }
    }
}