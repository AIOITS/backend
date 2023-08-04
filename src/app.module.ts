import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQlModule } from './graph-ql/graph-ql.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [GraphQlModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
