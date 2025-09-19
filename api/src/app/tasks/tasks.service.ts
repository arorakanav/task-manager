import { ForbiddenException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Task } from "./tasks.entity";
import { User } from "../users/entities";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  async create(creteTaskInput:CreateTaskDto) {
    return this.repo.save(creteTaskInput);
  }

  async findAll(user: User) {
    if (user.role === 'admin') return this.repo.find();
    return this.repo.find({ where: { assignee: user } });
  }

  async update(id: number, dto: UpdateTaskDto, user: User) {
    const task = await this.repo.findOneBy({ id });
    if (task.assignee.id !== user.id && user.role !== 'manager') throw new ForbiddenException();
    return this.repo.save({ ...task, ...dto });
  }

  async delete(id: number, user: User) {
    const task = await this.repo.findOneBy({ id });
    if (user.role !== 'admin') throw new ForbiddenException();
    return this.repo.remove(task);
  }
}

function InjectRepository(Task: any): (target: typeof TaskService, propertyKey: undefined, parameterIndex: 0) => void {
    throw new Error("Function not implemented.");
}
