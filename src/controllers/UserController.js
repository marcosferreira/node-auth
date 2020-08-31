import User from '../models/User';

class UserController {
  async index(request, response) {
    try {
      const users = await User.find();

      return response.status(200).json(users);
    } catch (error) {
      return response.status(401).json({ error: error.message });
    }

  }

  async store(request, response) {}

  async show(request, response) {}

  async update(request, response) {}

  async exclude(request, response) {}

}

export default UserController;
