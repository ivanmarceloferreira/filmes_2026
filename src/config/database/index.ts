import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "filmes_2026",
    "postgres",
    "mysecretpassword",
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres', // ou mysql
        logging: false
    }
);

export default sequelize;