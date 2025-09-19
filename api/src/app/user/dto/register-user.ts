import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';
import { Role } from '../enums';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  name: string;

  @IsEnum(Role)
  role: Role;
}