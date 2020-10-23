 const { query }=require('../dbConnect');

 const sqlCreateTable = "CREATE TABLE scores (id SERIAL PRIMARY KEY, playername TEXT, playerid INTEGER, score INTEGER, gametype TEXT)";

 async function createTable() {
    const response = await query(sqlCreateTable);
    console.log(response);
 };

 createTable();