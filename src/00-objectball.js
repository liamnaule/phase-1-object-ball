function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          }
        }
      }
    };
  }
  
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
    return "Player not found";
  }
  
  function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
    return "Player not found";
  }
  
  function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return "Team not found";
  }
  
  function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      let players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
    return "Player not found";
  }
  
  function bigShoeRebounds() {
    let game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let team in game) {
      let players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }
    return rebounds;
  }

  