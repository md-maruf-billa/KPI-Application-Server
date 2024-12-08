import 'dotenv/config';
const serverConfig = {
  server_port: process.env.PORT,
  db_url: process.env.DB_URL,
  env_mode : process.env.MODE,
};

export default serverConfig;
