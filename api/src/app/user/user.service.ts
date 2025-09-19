import { Injectable } from "@nestjs/common";

@Injectable()
export default class UserService {
  async findByEmail(email: string) {
    // Dummy implementation, replace with actual database call
    return Promise.resolve({ id: 1, email, password: 'hashedPassword', role: 'user' });
  }
}
