import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UsersModule } from "./users/users.module"
import { AuthModule } from "./auth/auth.module"
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
    UsersModule,
    AuthModule,
    MongooseModule.forRoot("mongodb://mongodb:27017/Wallet"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
