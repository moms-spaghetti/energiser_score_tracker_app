const { query } = require('../db/dbConnect');

module.exports = {
    getTopTenScores: async (game) => {
        const sqlTopTen = "SELECT * FROM scores WHERE gametype = $1 ORDER BY score DESC LIMIT 10";
        const topTenScores = await query(sqlTopTen, [game]);
        return topTenScores.rows;
    },
    getUniqueGameTypes: async _ => {
        const sqlUniqueGameTypes = "SELECT DISTINCT(gametype) FROM scores";
        const gameTypes = await query(sqlUniqueGameTypes);
        return gameTypes.rows;
    },
    addNewPlayerScores: async (newScores) => {
        const sqlAddNewScores = "INSERT INTO scores (playername, score, gametype) VALUES ($1, $2, $3)";
        newScores.forEach(async (value) => {
            const response = await query(sqlAddNewScores, [value.playername.toLowerCase(), value.score, value.gametype.toLowerCase()]);
            return { success: true };
        })
    },
    getUniquePlayerNames: async _ => {
        const sqlUniquePlayerNames = "SELECT DISTINCT(playername) FROM scores ORDER BY playername ASC";
        const playerNames = await query(sqlUniquePlayerNames);
        // console.log(playerNames)
        return playerNames.rows;
    },
    deleteGametype: async (gametype) => {
        const sqlGameType = "DELETE FROM scores WHERE gametype = $1"; 
        await query(sqlGameType, [gametype]);
        return { success : true };
    },
    deletePlayer: async (player) => {
        const sqlDeletePlayer = "DELETE FROM scores WHERE playername = $1";
        await query(sqlDeletePlayer, [player]);
        // return { success : true };
    }
    
 }