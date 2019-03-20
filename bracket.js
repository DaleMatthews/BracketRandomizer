let games = [
    // first section
    {
        Duke: 1,
        NDS: 16,
    },
    {
        VCU: 8,
        UCF: 9,
    },
    {
        Mississippi: 5,
        Liberty: 12,
    },
    {
        'Virgina Tech': 4,
        'Saint Louis': 13,
    },
    {
        Maryland: 6,
        Belmont: 11,
    },
    {
        LSU: 3,
        Yale: 14,
    },
    {
        Louisville: 7,
        Minnesota: 10,
    },
    {
        'Michigan State': 2,
        Bradley: 15,
    },

    // second section
    {
        Gonzaga: 1,
        'F. Dicinson': 16,
    },
    {
        Syracuse: 8,
        Baylor: 9,
    },
    {
        Marquette: 5,
        'Murray State': 12,
    },
    {
        'Florida St': 4,
        Vermont: 13,
    },
    {
        Buffalo: 6,
        ASU: 11,
    },
    {
        'Texas Tech': 3,
        'N Kentucky': 14,
    },
    {
        Nevada: 7,
        Florida: 10,
    },
    {
        Michigan: 2,
        Montana: 15,
    },

    // third section
    {
        Virgina: 1,
        'Gardner-Webb': 16,
    },
    {
        'Ole Miss': 8,
        Oklahoma: 9,
    },
    {
        Wisconsin: 5,
        Oregon: 12,
    },
    {
        'Kansas State': 4,
        'UC Irvine': 13,
    },
    {
        Villanova: 6,
        "Saint Mary's": 11,
    },
    {
        Purdue: 3,
        'Old Dominion': 14,
    },
    {
        Cincinnati: 7,
        Iowa: 10,
    },
    {
        Tennessee: 2,
        Colgate: 15,
    },
    // fourth section
    {
        'North Carolina': 1,
        Iona: 16,
    },
    {
        'Utah State': 8,
        Washington: 9,
    },
    {
        Auburn: 5,
        'New Mexico St': 12,
    },
    {
        Kansas: 4,
        Northeastern: 13,
    },
    {
        'Iowa State': 6,
        'Ohio State': 11,
    },
    {
        Houston: 3,
        'Georgia State': 14,
    },
    {
        Wofford: 7,
        'Seton Hall': 10,
    },
    {
        Kentucky: 2,
        'Abil Christian': 15,
    },
];

console.log(`============= ${games.length*2} teams remain =============`);
while (games.length) {
    for (game of games) {
        let weights = [];
        let names = [];
        for (const team in game) {
            weights.push(game[team]);
            names.push(team);
        }

        const totalWeight = weights[0] + weights[1];
        const threshold = weights[0] / totalWeight;
        game.winner = Math.random() >= threshold ? names[0] : names[1];
        console.log(`${names[0]} (${weights[0]}) vs ${names[1]} (${weights[1]}): ${game.winner}`);
    }

    // generate the next round based on the winners
    for (let i=0; i<games.length-1; i+=2) {
        games[i/2] = {
            [games[i].winner]: games[i][games[i].winner],
            [games[i+1].winner]: games[i+1][games[i+1].winner]
        };
    }
    games.length = games.length > 1 ? games.length/2 : 0;

    if (games.length > 1) console.log(`\n\n============= ${games.length*2} teams remain =============`);
    else if(games.length === 1) console.log('\n\n============= Championship Game =============');
}