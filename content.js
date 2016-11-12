var contentPort = chrome.runtime.connect({name: "contentPort"});

chrome.runtime.onConnect.addListener(function(port) {

    port.onMessage.addListener(function(message) {

        if (message.method == 'getData' && port.name == 'contentPort') {

            chrome.storage.local.get(null, function(items) { // https://developer.chrome.com/extensions/storage#type-StorageArea

                var lineups = [];

                var players = [];

                var errors = [];

                var showLineupsOnThisDate = items.showLineupsOnThisDate;

                var showLineupsAfter = items.showLineupsAfter;
                showLineupsAfter = new Date(Date.parse('2016/01/01 '+showLineupsAfter));

                var lineupBuyIns = items.lineupBuyIns;

                var selectorForLineupsToShow = getSelectorForLineupsToShow(items.lineupsToShow);

                var playerPool = items.playerPool;

                console.log(items);

                $(selectorForLineupsToShow).each(function() {

                    var lastEditText = $(this).find('div.last-edit').text();

                    var lineupDate = lastEditText.replace(/(Last Edit: )(\d+\/\d+\/\d+ )(\d+:\d+ (am|pm))( EST)/, '$2');

                    var lastEditTime = lastEditText.replace(/(Last Edit: \d+\/\d+\/\d+ )(\d+:\d+ (am|pm))( EST)/, '$2');
                    lastEditTime = new Date(Date.parse('2016/01/01 '+lastEditTime));

                    if (lastEditTime > showLineupsAfter && (showLineupsOnThisDate === '' || lineupDate.trim() === showLineupsOnThisDate)) {
                        var numOfEntries = parseInt($(this).find('div.entries span').text());

                        var tbody = $(this).find('table tbody');

                        var lineup = new Lineup(numOfEntries);

                        tbody.children('tr').each(function() {

                            var name = $(this).find('td.p-name a').text().trim();

                            name = fixName(name);

                            var position = $(this).attr('data-pn').trim();

                            errors = processPlayer(players, name, position, lineup, playerPool, errors);
                        });

                        lineups.push(lineup);
                    }
                });

                console.log(lineups);

                lineups.sort(function(a,b) {

                    return a.fpts - b.fpts;
                });

                var dailyBuyIn = items.dailyBuyInTarget;

                addPercentagesToPlayers(players, lineups, dailyBuyIn);

                players.sort(function(a,b) {

                    return b.percentage - a.percentage;
                });

                if (calculateDailyBuyIn(lineups, lineupBuyIns) != items.dailyBuyInTarget) {

                    errors.push('The daily buy in, $'+calculateDailyBuyIn(lineups)+', does not match the target, $'+items.dailyBuyInTarget+'.');
                }

                contentPort.postMessage({ 

                    method: 'sendData', 
                    data: {

                        lineups: lineups, 
                        players: players, 
                        dailyBuyIn: dailyBuyIn,
                        errors: errors
                    }
                });
            });
        }
    });
});


