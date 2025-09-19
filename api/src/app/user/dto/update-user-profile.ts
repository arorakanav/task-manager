import { IsOptional, IsString, IsEnum } from 'class-validator';

export class UpdateUserProfileDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEnum(['admin', 'manager', 'contributor'])
  role?: 'admin' | 'manager' | 'contributor';
}