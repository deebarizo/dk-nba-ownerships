/****************************************************************************************
HELPERS
****************************************************************************************/

function getSelectorForLineupsToShow(lineupsToShow) {

    if (lineupsToShow === 'upcoming-and-live') {

        return 'div.lineup.live, div.lineup.upcoming';
    }

    if (lineupsToShow === 'upcoming') {

        return 'div.lineup.upcoming';
    }

    if (lineupsToShow === 'live') {

        return 'div.lineup.live';
    }

    if (lineupsToShow === 'complete') {

        return 'div.lineup.complete';
    }
}

function processPlayer(players, name, position, lineup, playerPool, errors) {

    if (players.length > 0) {

        for (var i = 0; i < players.length; i++) {

            if (name === players[i].name) {
            
                lineup.players.push(players[i]);

                return errors;
            }
        };  
    } 
        
    var player = new Player(name, position, playerPool, errors);

    players.push(player);

    lineup.players.push(player);

    return player.errors;
}

function calculateDailyBuyIn(lineups, lineupBuyIn) {

    return lineups.length * lineupBuyIn;
}

function addPercentagesToPlayers(players, lineups, dailyBuyIn, lineupBuyIn, playerPool) {
    
    for (var i = 0; i < players.length; i++) {
    
        players[i].buyIn = getPlayerBuyIn(players[i], lineups, lineupBuyIn);

        players[i].percentage = players[i].buyIn / dailyBuyIn * 100;
        players[i].percentage = players[i].percentage.toFixed(2);

        players[i].position = getPlayerPosition(players[i], playerPool);
    };
}

function getPlayerPosition(player, playerPool) {

    for (var i = 0; i < playerPool.length; i++) {
        
        if (player['name'] === playerPool[i]['Name']) {

            return playerPool[i]['Position'];
        }
    }
}

function getPlayerBuyIn(player, lineups, lineupBuyIn) {

    var playerBuyIn = 0;

    for (var i = 0; i < lineups.length; i++) {
        
        for (var n = 0; n < lineups[i]['players'].length; n++) {
            
            if (lineups[i]['players'][n]['name'] === player['name']) {

                playerBuyIn += lineupBuyIn * lineups[i]['numOfEntries'];
            }
        }
    }

    return playerBuyIn;
}

function onlyUnique(value, index, self) { // http://stackoverflow.com/a/14438954

    return self.indexOf(value) === index;
}
