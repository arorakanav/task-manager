import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { JWT_SECRET } from '../../../../config';
@Module({
  imports: [JwtModule.register({ secret: `${JWT_SECRET}` })],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}