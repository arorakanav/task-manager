const { Controller, Get, Post, Body } = require('@nestjs/common');

@Controller('auth')
class AuthController {
  @Get()
  getAuthStatus() {
    return { status: 'Auth controller is working!' };
  }

  @Post('login')
  login(@Body() body) {
    // Implement login logic here
    return { message: 'Login endpoint', body };
  }
}

module.exports = { AuthController };