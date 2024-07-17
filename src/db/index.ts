import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    dialect: 'mysql'
  }
);

export default db;

 export async function dbConnectionTest() {
  try {
    await db.authenticate();
    await db.sync()
    console.log('Conectado ao banco de dados!');
  } catch (error) {
    console.error('Error ao conectar com banco de dados:', error);
  }
}