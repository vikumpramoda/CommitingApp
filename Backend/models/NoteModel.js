import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
// Create Schema
const Notes = db.define('notes',{
    title:{
        type: DataTypes.STRING
    },
    note:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default Notes;