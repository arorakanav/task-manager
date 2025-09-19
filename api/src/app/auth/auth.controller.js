const { Controller, Get, Post, Body } = require('@nestjs/common');

@Controller('auth')
class AuthController {
  @Get()
  getAuthStatus() {
    return { status: 'Auth controller is working!' };
  }

  @Post('login')
  login(req, res) {
    // Implement login logic here
    const body = req.body;
    return res.json({ message: 'Login endpoint', body });
  }
}

module.exports = { AuthController };