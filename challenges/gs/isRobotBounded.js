// https://leetcode.com/problems/robot-bounded-in-circle/
// Runtime: 76 ms, faster than 87.40% of JavaScript online submissions for Robot Bounded In Circle.
// Memory Usage: 38.6 MB, less than 68.90% of JavaScript online submissions for Robot Bounded In Circle.
var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 1;

    for (let direction of instructions) {
        if (direction === "R") {
            let temp = dx;
            dx = dy;
            dy = -temp;
        } else if (direction === "L") {
            let temp = dy;
            dy = dx;
            dx = -temp;
        } else {
            x = x + dx;
            y = y + dy;
        }
    }
    return (!x && !y) || dy !== 1;
};

//using modulo 4
var isRobotBounded = function(instructions) {
    let steps = [
        [-1,0],
        [0,1],
        [1,0],
        [0,-1]
    ];
    let x = y = 0;
    
    let currStep = 1;
    let turn = (direction) =>{
        if(direction === "L") currStep--;
        else if(direction === "R") currStep++;
        else if(direction === "G") {
            x += steps[currStep][0];
            y += steps[currStep][1];
        }
        if(currStep < 0) currStep = 3;
        if(currStep === 4) currStep = 0;
    }
    
    
    for(let i=0; i<instructions.length*4; i++){
        turn(instructions[i]);
    }
	// I was stucked at the last return. The following line might be the key line for this problem.
	// as lone as the robot is at (0,0) or not going north, it should be true.
    return (currStep !== 1) || (x ===0 && y===0);
};

console.log(isRobotBounded("GGLLGG"));
console.log(isRobotBounded("GG"));
console.log(isRobotBounded("GL"));