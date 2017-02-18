function fixName(name) {

	var names = [

		{
			dkName: 'R. Westbrook',
			csvName: 'Russell Westbrook'
		},
		{
			dkName: 'G. Antetokounmpo',
			csvName: 'Giannis Antetokounmpo'
		},
		{
			dkName: 'M. Dellavedova',
			csvName: 'Matthew Dellavedova'
		},
		{
			dkName: 'Danté Exum',
			csvName: 'Dante Exum'
		},
		{
			dkName: 'G. Robinson III',
			csvName: 'Glenn Robinson III'
		},
		{
			dkName: 'J. Valanciunas',
			csvName: 'Jonas Valanciunas'
		},
		{
			dkName: 'K. Porzingis',
			csvName: 'Kristaps Porzingis'
		},
		{
			dkName: 'L. Aldridge',
			csvName: 'LaMarcus Aldridge'
		},
		{
			dkName: 'M. Speights',
			csvName: 'Marreese Speights'
		},
		{
			dkName: 'L. Richard Mb...',
			csvName: 'Luc Richard Mbah a Moute'
		},
		{
			dkName: 'K. Towns',
			csvName: 'Karl-Anthony Towns'
		},
		{
			dkName: 'Sergio Rodríguez',
			csvName: 'Sergio Rodriguez'
		},
		{
			dkName: 'P. Patterson',
			csvName: 'Patrick Patterson'
		}
	];

	for (var i = 0; i < names.length; i++) {
		
		if (names[i]['dkName'] === name) {

			return names[i]['csvName'];
		}
	}

	return name;
}

function fixBatName(name) {

	var names = [

		{
			dkFixedName: 'Joe Ross',
			batName: 'Joseph Ross'
		},
		{
			dkFixedName: 'Jarrod Saltalamacchia',
			batName: 'Jarrod Saltalamacch...'
		},
		{
			dkFixedName: 'Jung Ho Kang',
			batName: 'Jung-Ho Kang'
		},
		{
			dkFixedName: 'Ivan De Jesus Jr.',
			batName: 'Ivan De Jesus'
		},
		{
			dkFixedName: 'Rickie Weeks Jr.',
			batName: 'Rickie Weeks'
		},
		{
			dkFixedName: 'Byung Ho Park',
			batName: 'Byung-ho Park'
		},
		{
			dkFixedName: 'Mike Bolsinger',
			batName: 'Michael Bolsinger'
		},
		{
			dkFixedName: 'Jackie Bradley Jr.',
			batName: 'Jackie Bradley'
		},
		{
			dkFixedName: 'Matt Szczur',
			batName: 'Matthew Szczur'
		},
		{
			dkFixedName: 'Mike Fiers',
			batName: 'Michael Fiers'
		},
		{
			dkFixedName: 'Kike Hernandez',
			batName: 'Enrique Hernandez'
		}
	];

	for (var i = 0; i < names.length; i++) {
		
		if (names[i]['batName'] === name) {

			return names[i]['dkFixedName'];
		}
	}

	return name;	
}

function fixTeamName(name) {

	var names = [

		{
			dkName: 'SF',
			batName: 'SFG'
		},
		{
			dkName: 'SD',
			batName: 'SDP'
		},
		{
			dkName: 'CWS',
			batName: 'CHW'
		},
		{
			dkName: 'KC',
			batName: 'KCR'
		},
		{
			dkName: 'TB',
			batName: 'TBR'
		},
		{
			dkName: 'Sea',
			batName: 'SEA'
		},
		{
			dkName: 'Mia',
			batName: 'MIA'
		}
	];

	for (var i = 0; i < names.length; i++) {
		
		if (names[i]['dkName'] === name) {

			return names[i]['batName'];
		}
	}

	return name;
}
