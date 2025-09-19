import { IsString, IsOptional, IsDateString, IsEnum, IsInt } from 'class-validator';
import { User } from '../../users/entities';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['todo', 'in_progress', 'done'])
  status: 'todo' | 'in_progress' | 'done';

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsInt()
  priority?: number;

  @IsInt()
  projectId: number;

  @IsInt()
  assigneeId: number;
}