import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { DatabaseMoudule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';


@Module({
  imports: [
    UserModule,
    DatabaseMoudule,
    ConfigModule.forRoot({isGlobal:true}),
    PostModule
  ],
}) 
export class AppModule {}
