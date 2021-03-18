// https://leetcode.com/problems/design-browser-

// Runtime: 188 ms, faster than 97.24% of JavaScript online submissions for Design Browser History.
// Memory Usage: 48.2 MB, less than 97.49% of JavaScript online submissions for Design Browser History.

class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.location = 0;
    }

    visit(url) {
          this.history = this.history.slice(0, this.location + 1);
          this.history.push(url);
          this.location = this.history.length - 1; // or this.location++;
    }

    back(steps) { 
        this.location = Math.max(this.location - steps, 0);
        return this.history[this.location];
    }

    forward(steps) {
        this.location = Math.min(this.location + steps, this.history.length - 1);
        return this.history[this.location];
    }
}

//without Math.min/max
class BrowserHistory {
    constructor(homepage) {
        this.history = [homepage];
        this.location = 0;
    }

    visit(url) {
        this.stack = this.stack.slice(0, this.curr+1);
        this.stack.push(url);
        this.curr = this.stack.length-1;
    }

    back(steps) { 
        this.curr -= steps;
        if (this.curr < 0) this.curr = 0;
        return this.stack[this.curr];
    }

    forward(steps) {
        this.curr += steps;
        if (this.curr > this.stack.length - 1) this.curr = this.stack.length - 1;
        return this.stack[this.curr]
    }
}

// using linked list
var BrowserHistory = function(homepage) {
    this.page = {
        url: homepage,
        back: null,
        next: null,
    };
};

BrowserHistory.prototype.visit = function(url) {
    this.page.next = {
        url,
        back: this.page,
        next: null
    };
    this.page = this.page.next;
};

BrowserHistory.prototype.back = function(steps) {
    while (this.page.back && steps) {
        this.page = this.page.back;
        steps--;
    }
    
    return this.page.url;
};

BrowserHistory.prototype.forward = function(steps) {
    while (this.page.next && steps) {
        this.page = this.page.next;
        steps--;
    }
    
    return this.page.url;
};

// first attempt

// class BrowserHistory {
//     constructor(homepage) {
//         this.history = [homepage];
//         this.currentLocation = 0;
//     }

//     visit(url) {
//         this.history.push(url);
//         this.currentLocation++;
//         this.history.slice(0, this.currentLocation + 1);
//     }

//     back(steps) {
//         if (this.currentLocation > 0) this.currentLocation -= steps;
//         return this.history[this.currentLocation];
//     }

//     forward(steps) {
//         if (this.currentLocation + steps < this.history.length) this.currentLocation += steps
//         else (this.currentLocation = this.history.length - 1);
//         return this.history[this.currentLocation];
//     }
// }

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