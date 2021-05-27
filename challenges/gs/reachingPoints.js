
// recursive - TLE
// Time complexity O(2^tx+ty) space complexity O(tx*ty);
// var reachingPoints = function(sx, sy, tx, ty) {
//     if (sx > tx || sy > ty) return false;
//     if (sx == tx && sy == ty) return true;
//     return reachingPoints(sx + sy, sy, tx, ty) || reachingPoints(sx, sy + sx, tx, ty);
// };

// work backwards (Naive Variant)

// var reachingPoints = function(sx, sy, tx, ty) {
//     while (tx >= sx && ty >= sy) {
//         if (sx === tx && sy === ty) {
//             return true;
//         }
//         if (tx > ty) {
//             tx -= ty;
//         } else {
//             ty -= tx;
//         }
//     }
//     return false;
// };

// work backwards (Modulo Variant)
// Runtime: 76 ms, faster than 90.67% of JavaScript online submissions for Reaching Points.
// Memory Usage: 38.8 MB, less than 44.00% of JavaScript online submissions for Reaching Points.
var reachingPoints = function(sx, sy, tx, ty) {
    while (tx >= sx && ty >= sy) {
        if (tx === ty) break;
        if (tx > ty) {
            if (ty > sy) tx %= ty;
            else return (tx - sx) % ty === 0;
        } else {
            if (tx > sx) ty %= tx;
            else return (ty - sy) % tx === 0;
        }
    }
    return (tx === sx && ty === sy);
};

var reachingPoints = function(sx, sy, tx, ty) {
    while (tx > sx && ty > sy){
        if (tx > ty) {
            tx %= ty;
        } else
            ty %= tx;
    }
    if (tx < sx || ty < sy)
        return false;
    if (tx === sx && ty === sy)
        return true;
    if (ty > sy)
        return (ty - sy) % sx === 0;
    else if (tx > sx)
        return (tx - sx) % sy === 0;
};

var reachingPoints = function(sx, sy, tx, ty) {
    while (tx > sx && ty > sy) {
        if (tx > ty) {
            tx %= ty;
        } else {
            ty %= tx;
        }
    }
    
    return (tx == sx && ty >= sy && (ty - sy) % sx == 0 || ty == sy && tx >= sx && (tx - sx) % sy == 0);
    
};

console.log(reachingPoints(1,1,3,5));
console.log(reachingPoints(1,1,2,2));
console.log(reachingPoints(1,1,1,1));
