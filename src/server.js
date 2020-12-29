import mongoose from 'mongoose';

import app from '../src/app';

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
})

const HOST = process.env.SERVER_HOST || '127.0.0.1';
const PORT = process.env.SERVER_PORT || 3333;
const MSG = () => console.log(`Started server in http://${HOST}:${PORT}`);

app.listen(PORT, HOST, MSG);
