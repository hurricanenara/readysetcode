// https://leetcode.com/problems/design-browser-


class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.currentLocation = 0;
    }

    visit(url) {
        this.history.push(url);
        this.currentLocation++;
        this.history.slice(0, this.currentLocation + 1);
    }

    back(steps) {
        if (this.currentLocation > 0) this.currentLocation -= steps;
        return this.history[this.currentLocation];
    }

    forward(steps) {
        if (this.currentLocation + steps < this.history.length) this.currentLocation += steps
        else (this.currentLocation = this.history.length - 1);
        return this.history[this.currentLocation];
    }
}

const browserHistory = new BrowserHistory('google.com');
browserHistory.visit('leetcode.com');
browserHistory.visit('stackoverflow.com');
console.log(browserHistory.history);
// console.log(browserHistory.back(1));
// console.log(browserHistory.back(1));
// console.log(browserHistory.back(1));
// console.log(browserHistory.currentLocation);
// console.log(browserHistory.forward(3));

// console.log(browserHistory);