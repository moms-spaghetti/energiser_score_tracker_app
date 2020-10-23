var express = require('express');
// const { route } = require('./scores');
var router = express.Router();
const {
  getTopTenScores,
  getUniqueGameTypes,
  addNewPlayerScores,
  deleteGametype,
  getUniquePlayerNames,
  deletePlayer,
} = require('../model/scores')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/scores', async (req, res) => {
  // res.sendFile(path.join(`${__dirname}/index.html`));

  if (req.query.uniquePlayers) { //getUniquePlayers()
    // console.log(`****getUniquePlayers***`)
    const uniquePlayers = await getUniquePlayerNames();
    res.json({ result: uniquePlayers });
    return;
  }

  if (req.query.uniqueGametypes) {
    const uniqueGames = await getUniqueGameTypes();
    // console.log(`****getUniqueGameTypes***`)
    res.json({ result: uniqueGames })
    return;
  }

});

router.get('/scores/:game', async (req, res) => {
  const game = req.params.game;
  const gameScoreResult = await getTopTenScores(game);
  res.json({ result: gameScoreResult });
});

router.post('/scores', async (req, res) => { //ignore
  const response = await addNewPlayerScores(req.body)
  res.send(response)
});

router.delete('/scores', async (req, res) => { //ignore
  if(req.query.player){
    const response = await deletePlayer(req.query.player);
    return res.json({ success: true })
  }

  const response = await deleteGametype(req.query.game);
  res.json({ success: true })
});

// router.delete('/scores', async (req, res) => { //ignore
//   const response = await deleteGametype(req.query.game);
// })


module.exports = router;

// router.get('/scores', async (req, res) => {
//   const uniqueGames = await getUniqueGameTypes();
//   console.log(`****DSFSDSDFSDF*S***`)
//   res.json({ result: uniqueGames });
// });