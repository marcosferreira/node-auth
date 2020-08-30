import User from '../models/User';

class UserController {
  async index(request, response) {
    const user = await User.find();

    return response.status(200).json(user);
  }

  async store(request, response) {}

  async show(request, response) {}

  async update(request, response) {}

  async exclude(request, response) {}

}

export default UserController;
