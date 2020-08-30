import User from '../models/User';

class AuthController {
  async signup(request, response) {
    try {
      const user = await User.create(request.body);

      response.status(200).json(user);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }

  }

  async login(request, response) {
    const { email, password } = request.body;

    try {
      const user = await User.findOne({ email, password });

      if (!user) return response.status(401);

      return response.status(200).json(user);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  }

  async forgotPassword(request, response) {}

}
