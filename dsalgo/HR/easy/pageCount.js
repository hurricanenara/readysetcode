// https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2 );
    
    return Math.min(pageTurns, totalTurns - pageTurns);
}