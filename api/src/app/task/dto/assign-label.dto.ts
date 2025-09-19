import { IsInt } from 'class-validator';

export class AssignLabelDto {
  @IsInt()
  taskId: number;

  @IsInt()
  labelId: number;
}