"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSelection = TeamSelection;
function TeamSelection(players, teamsize) {
    var temp = [];
    var uniq = [];
    if (teamsize > players.length || teamsize <= 1)
        return 'Invalid team size';
    for (var i = 0; i < players.length; i++) {
        if (uniq.includes(players[i]) || players[i].trim() === "")
            return 'Invalid input';
        uniq.push(players[i]);
    }
    if (players.length === teamsize)
        return players;
    for (var i = 0; i < players.length; i++) {
        temp.push([players[i]]);
    }
    for (var i = 0; i < players.length; i++) {
        for (var j = i + 1; j > i; j--) {
            if (j >= players.length)
                temp[i].push(players[j - i - 1]);
            else
                temp[i].push(players[j]);
        }
    }
    for (var k = temp[0].length; k < teamsize; k++) {
        for (var i = 0; i < temp.length; i++) {
            for (var j = temp[i].length - 1; j >= temp[i].length - 1; j--) {
                var Ind = players.indexOf(temp[i][j]);
                if (Ind >= players.length - 1)
                    Ind = Ind - players.length;
                temp[i].push(players[Ind + 1]);
            }
        }
    }
    return (temp);
}
