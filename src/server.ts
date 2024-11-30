import app from './app';
import serverConfig from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(serverConfig.db_url as string);
    app.listen(serverConfig.server_port, () => {
      console.log(`Application runnig on ${serverConfig.server_port} 🏃‍➡️🏃‍➡️🏃‍➡️`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
