/****************************************************************************************
LINEUP
****************************************************************************************/

function Lineup(numOfEntries) {

    this.numOfEntries = numOfEntries;

    this.players = [];
}


/****************************************************************************************
PLAYER
****************************************************************************************/

function Player(name, position, playerPool, errors, lineupCheck) {

    this.name = name;
    this.position = position;

    this.errors = errors;
}


/****************************************************************************************
STACK
****************************************************************************************/

function Stack(team, numOfPlayers) { 

    this.team = team;
    this.numOfPlayers = numOfPlayers;

    this.buyIn = 0;
    this.numOfEntries = 0;
}