

function tournamentWinner(competitions, results) {
	const scores = {};
	let bestTeam = "";

	for (let i = 0; i < results.length; i++) {
		const [homeTeam, awayTeam] = competitions[i];
		const homeTeamWon = results[i];
		if (homeTeamWon) {
			scores[homeTeam] = (scores[homeTeam] || 0) + 3;
			if (scores[homeTeam] > (scores[bestTeam] || 0)) bestTeam = homeTeam;
		} else {
			scores[awayTeam] = (scores[awayTeam] || 0) + 3;
			if (scores[awayTeam] > (scores[bestTeam] || 0)) bestTeam = awayTeam;
		}
		
	}
	// const bestScore = Math.max(...Object.values(scores));
	// let winner;
	// Object.keys(scores).forEach(team => {
	// 	if (scores[team] === bestScore) winner = team;
	// });
	return bestTeam;
}

console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ], [0, 0, 1])); // Python
