import User from '../models/User';
import * as jwt from '../utils/jwt';

export default async (request, response, next) => {
  const [hashType, token] = request.headers.authorization.split(' ');

  try {
    const payload = await jwt.verify(token);
    const user = await User.findById(payload.user);

    if (!user) {
      return response.status(401);
    }

    request.auth = user;

    next();
  } catch (error) {
    return response.status(401).json({ error: error.message })
  }
}
