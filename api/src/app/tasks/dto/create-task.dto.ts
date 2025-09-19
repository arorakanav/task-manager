import { IsString, IsOptional, IsDateString, IsEnum, IsInt } from 'class-validator';
import { User } from '../../users/entities';
import { Status } from '../enums';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(Status)
  status: Status;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsInt()
  priority?: number;

  @IsInt()
  projectId: number;

  @IsString()
  assigneeId: string;

  assignee?: User;
}