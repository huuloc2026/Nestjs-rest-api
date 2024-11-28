import { Module } from '@nestjs/common';
import { Authmodule } from './auth/auth.modules';

@Module({
  imports: [
    Authmodule
  ],
}) 
export class AppModule {}
