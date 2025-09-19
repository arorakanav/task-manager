import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task, User } from "../entities";

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

   async create(dto: CreateTaskDto, user: User) {
    return this.repo.save({ ...dto, assignee: user });
  }

  async findAll(user: User) {
    if (user.role === 'admin') return this.repo.find();
    return this.repo.find({ where: { assignee: user } });
  }

  async update(id: string, dto: UpdateTaskDto, user: User) {
    const task = await this.repo.findOneBy({ id });
    if (task.assignee.id !== user.id && user.role !== 'manager') throw new ForbiddenException();
    return this.repo.save({ ...task, ...dto });
  }

  async delete(id: string, user: User) {
    const task = await this.repo.findOneBy({ id });
    if (user.role !== 'admin') throw new ForbiddenException();
    return this.repo.remove(task);
  }
}
