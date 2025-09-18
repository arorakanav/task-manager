import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Roles } from "./decorators/roles";

@Controller('tasks')
export class TasksController {
  @Get()
  @Roles('admin', 'manager', 'contributor')
  findAll() { /* ... */ }

  @Post()
  @Roles('manager')
  createTask() { /* ... */ }

  @Put(':id')
  @Roles('manager', 'contributor')
  updateTask() { /* ... */ }

  @Delete(':id')
  @Roles('admin')
  deleteTask() { /* ... */ }
}