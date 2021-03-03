// https://leetcode.com/problems/design-underground-system/

// Runtime: 256 ms, faster than 46.09% of JavaScript online submissions for Design Underground System.
// Memory Usage: 54.7 MB, less than 48.79% of JavaScript online submissions for Design Underground System
var UndergroundSystem = function() {
    this.customers = new Map();
    this.stations = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customers[id] = { stationName, t };
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const startStation = this.customers[id].stationName;
    const startTime = this.customers[id].t;
    const route = `${startStation} => ${stationName}`;
    if (!this.stations[route]) {
        this.stations[route] = [];
    }
    this.stations[route].push(t - startTime);
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = `${startStation} => ${endStation}`;
    let sum = this.stations[route].reduce((acc ,el) => acc + el);
    return sum / this.stations[route].length;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
