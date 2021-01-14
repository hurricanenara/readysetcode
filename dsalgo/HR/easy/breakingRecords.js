function breakingRecords(scores) {
    let best = new Set();
    let worst = new Set();
    const firstScore = scores[0];
    best.add(firstScore);
    worst.add(firstScore);

    for (let i = 1; i < scores.length; i++) {
        debugger
        const score = scores[i];
        if (score > Math.max(...best)) {
            debugger
            best.add(score);
        } else if (score < Math.min(...worst)) {
            debugger
            worst.add(score);
        }
    }
    return [best.size - 1, worst.size - 1];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));