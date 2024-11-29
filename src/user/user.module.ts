import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './user.service';
import { UsersMockService } from './user-mock.service';

@Module({
    controllers:[UsersController],
    providers: [{
        provide: UserService,
        useClass: UsersMockService
    }],

})
export class UserModule {}
