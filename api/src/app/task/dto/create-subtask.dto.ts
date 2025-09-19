import { IsInt, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateSubtaskDto {
  @IsInt()
  taskId: number;

  @IsString()
  title: string;

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean;
}