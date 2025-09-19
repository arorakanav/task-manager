import { IsInt, IsString } from 'class-validator';

export class CommentDto {
  @IsInt()
  taskId: number;

  @IsInt()
  userId: number;

  @IsString()
  content: string;
}