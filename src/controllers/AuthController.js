import User from '../models/User';
import * as jwt from '../utils/jwt';

class AuthController {
  async signup(request, response) {
    try {
      const user = await User.create(request.body);
      user.password = undefined;

      const token = jwt.sign({ user: user.id });

      response.status(200).json({ user, token });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }

  }

  async login(request, response) {
    const [hashType, hash] = request.headers.authorization.split(' ');
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');

    try {
      const user = await User.findOne({ email, password });

      if (!user) {
        return response.status(401);
      }

      const token = jwt.sign({ user: user.id });

      return response.status(200).json({ user, token });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  }

  async me(request, response) {
    const user = request.auth;

    return response.status(200).json({ user });
  }

  async forgotPassword(request, response) {}

}

export default AuthController;
