import { Get } from "@nestjs/common";

const { Controller } = require('@nestjs/common');

@Controller('user')
export default class UserController {
  @Get()
  getUser() {
    return { message: "User endpoint" };
  }
}