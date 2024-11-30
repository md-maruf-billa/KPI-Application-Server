import 'dotenv/config';
const serverConfig = {
  server_port: process.env.PORT,
  db_url: process.env.DB_URL,
};

export default serverConfig;
