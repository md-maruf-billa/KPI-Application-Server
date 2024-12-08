import app from './app';
import serverConfig from './app/config';
import mongoose from 'mongoose';
import { Server } from 'http';

// define a server
let server: Server;

async function main() {
  try {
    await mongoose.connect(serverConfig.db_url as string);
    server = app.listen(serverConfig.server_port, () => {
      console.log(`Application runnig on ${serverConfig.server_port} 🏃‍➡️🏃‍➡️🏃‍➡️`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

// unhandle error
process.on('unhandledRejection', () => {
  console.log(
    'Maybe have any error in this server!! shutting down server⚠️⚠️⚠️',
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// uncaugth err
process.on('uncaughtException', () => {
  console.log(
    'Maybe have any error in this server!! shutting down server⚠️⚠️⚠️',
  );
  process.exit(1);
});
