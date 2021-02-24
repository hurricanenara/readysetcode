var UndergroundSystem = function() {
    // checkins = {
    //   "45": ["Leyton", 3]
    // }
    this.checkIns = new Map();

    // times = {
        // "Leyton": {
    //      "Waterloo": [14, x, x]         
    //   }
    // }
    this.times = new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns.set(id, [stationName, t]);
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [ startLocation, startTime ] = this.checkIns.get(id);
    const duration = t - startTime;
    
    if (this.times.has(startLocation)) {
        const start = this.times.get(startLocation)
        if (start.has(stationName)) {
            start.get(stationName).push(duration);
        } else {
            start.set(stationName, [duration])
        }
    } else {
        this.times.set(startLocation, new Map());
        this.times.get(startLocation).set(stationName, [duration]);
    }
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const startLocation = this.times.get(startStation);
    const times = startLocation.get(endStation);
    const total = times.reduce((acc, curr) => {
        return acc + curr;
    });
                               
    return total / times.length;
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */