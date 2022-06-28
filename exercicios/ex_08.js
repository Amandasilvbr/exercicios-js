let games ="10, 20, 20, 8, 25, 3, 0, 30, 1"

function test(games) {
    let gamesSpots = games.split(", ")
    let recordNumber = 0;
    let worstGame = 1;
    let spotsBetterGame = gamesSpots[0];
    let spotsWorstGame = gamesSpots[0];
    for (let i = 1; i < gamesSpots.length; i++) {
        if (gamesSpots[i] > spotsBetterGame) {
            spotsBetterGame = gamesSpots[i];
            recordNumber++;
        } else if (gamesSpots[i] < spotsWorstGame) {
            spotsWorstGame = gamesSpots[i];
            worstGame=i+1;
        }
    }
    return [recordNumber, worstGame];
}

alert(test(games));




