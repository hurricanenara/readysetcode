var Leaderboard = function() {
    this.board = new Map();
}
/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (this.board.has(playerId)) {
        const val = this.board.get(playerId);
        score = val + score
    }
    this.board.set(playerId, score);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const desc = [...this.board.values()].sort((a, b) => b - a);
    const top = desc.slice(0, K);
    
    if (top.length) return top.reduce((acc, el) => acc + el);
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.board.delete(playerId);
};
