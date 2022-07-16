import {Sequelize} from "sequelize";
//database connection mysql used phpmyadmin
const db = new Sequelize('auth_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;