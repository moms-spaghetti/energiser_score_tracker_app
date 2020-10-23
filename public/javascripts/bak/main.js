const setPlayerCountButton = document.querySelector('#setPlayerCount');
const resetPlayerCountButton = document.querySelector('#resetPlayerCount');
const scoreInputBox = document.querySelector('#scoreInput');
const playerNumbers = document.querySelector('#playerCount');
const playerCountButton = document.querySelector('#setPlayerCount');

let existingGameTypes;

async function getScoreData(gametype) {
    const response = await fetch(`/scores/${gametype}`);
    const data = await response.json();
    const scoreData = data.result;
    setTimeout(createScoreSection(scoreData), 2000)
};

async function getUniqueGameTypes() {
    const response = await fetch(`/scores`);
    const data = await response.json();
    const uniqueGames = data.result;
    existingGameTypes = uniqueGames;
    initScoreBoxes(uniqueGames);
};

function collectInputDataFromPage() {
    const nameDataFromInput = document.querySelectorAll('.player-name-input')
    const scoreDataFromInput = document.querySelectorAll('.player-score-input')
    let combinedFinalData = {};
    nameDataFromInput.forEach((nameValue, index) => {
        combinedFinalData[index] = { playername: nameValue.value, score: Number(scoreDataFromInput[index].value) };
    });
    return combinedFinalData;
};

function initScoreBoxes(gameTypeData){
    gameTypeData.forEach((value) => {
        getScoreData(value.gametype);
    })
};

function createGameTypeSelector() {
    // let gametypeInputList = document.createElement('input');
    let gametypeDatalist = document.querySelector('datalist');
    // let br = document.createElement('br');
    

    // gametypeInputList.setAttribute('list', 'gametypes');
    // gametypeInputList.setAttribute('name', 'gametype');
    // gametypeInputList.setAttribute('placeholder', 'Select game type');
    
    // gametypeDatalist.setAttribute('id', 'gametypes');

    existingGameTypes.forEach((value) => {
        let option = document.createElement('option');
        option.setAttribute('value', value.gametype)
        gametypeDatalist.appendChild(option);
    });
    // scoreInputBox.appendChild(gametypeDatalist)
    // scoreInputBox.appendChild(gametypeInputList)
    

    // scoreInputBox.insertAdjacentElement('afterbegin', gametypeDatalist);
    // scoreInputBox.insertAdjacentElement('afterbegin', gametypeInputList)
    // scoreInputBox.insertAdjacentElement('afterbegin', br);
}

function createScoreSection(data) {
    let gametype = data[0].gametype
    let mainScoreboard = document.querySelector('#main-scoreboard');
    let section = document.createElement('section');
    let title = document.createElement('h3');
    let article = document.createElement('article');
    section.setAttribute('id', `${gametype}Section`);
    section.className = `game-section-container`;
    article.className = `game-article-container`;
    title.textContent = `${gametype} top 10`;
    mainScoreboard.appendChild(section);
    section.appendChild(title);
    section.appendChild(article);
    article.appendChild(createScoreLi(data));
};

function createScoreLi(scoreData) {
    let ol = document.createElement('ol');
    ol.className = `game-section-ol`;
    scoreData.forEach((value) => {
        let li = document.createElement('li');
        li.className = `game-section-li`;
        li.textContent = `${value.playername} - ${value.score}`
        ol.appendChild(li)
    })
    return ol;
};

function renderInputItems() { //becomes create?
    let ul = document.createElement('ul');
    ul.setAttribute('id', 'scoreInputList')
    for(let i = 0; i < playerNumbers.value; i++){
        let li = document.createElement('li');
        let nameLabel = document.createElement('label');
        let nameInput = document.createElement('input');
        let scoreLabel = document.createElement('label');
        let scoreInput = document.createElement('input');
        nameLabel.className = 'player-name-label';
        scoreLabel.className = 'player-score-label';
        nameInput.className = 'player-name-input';
        scoreInput.className = 'player-score-input';
        nameInput.setAttribute('id', `player-name-${i + 1}`)
        scoreInput.setAttribute('id', `player-score-${i + 1}`)
        nameLabel.textContent = `Player ${i + 1}: `;
        scoreLabel.textContent = `Score: `;
        nameLabel.appendChild(nameInput);
        scoreLabel.appendChild(scoreInput);
        li.appendChild(nameLabel)
        li.appendChild(scoreLabel)
        ul.appendChild(li); //return to render?
    }
    playerNumbers.disabled = true;
    playerCountButton.disabled = true;
    resetPlayerCountButton.disabled = false;
    scoreInputBox.appendChild(ul)
    renderScoreSaveButton()
     //
};

function renderScoreSaveButton() { //is create?
    let uploadButton = document.createElement('button');
    uploadButton.textContent = `Save`
    uploadButton.setAttribute('id', 'score-save-button')
    uploadButton.addEventListener('click', collectInputDataFromPage); 
    scoreInputBox.appendChild(uploadButton) //return to render
}

function printText() { //TODO delete dev test only
    console.log('***working***')
}

function resetPlayerCount() {
    const scoreInputList = document.querySelector('#scoreInputList');
    playerNumbers.disabled = false;
    playerCountButton.disabled = false;
    scoreInputList.innerHTML = "";
    playerNumbers.value = "";
    resetPlayerCountButton.disabled = true;   
};

setPlayerCountButton.addEventListener('click', renderInputItems);
resetPlayerCountButton.addEventListener('click', resetPlayerCount);

getUniqueGameTypes()

createGameTypeSelector()
