const { query }=require('../dbConnect');
const testData=require('../data/testingData');

const sqlCreateTable = "INSERT INTO scores (playername, playerid, score, gametype) VALUES ($1, $2, $3, $4)";

async function populateTable() {
   testData.forEach(async (value) => {
    const response = await query(sqlCreateTable, [value.playername, value.playerid, value.score, value.gametype]);
    console.log(response);
   })
   
};

populateTable();