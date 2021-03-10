


// using a matrix/grid to store preferences with 2D array
var unhappyFriends = function(n, preferences, pairs) {
    let happyMap = new Array(n);
    let unhappy = 0;
    
    for (let [i, j] of pairs) {
        happyMap[i] = preferences[i].indexOf(j);
        happyMap[j] = preferences[j].indexOf(i);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < happyMap[i]; j++) {
            let partner = preferences[i][j];
            if (preferences[partner].indexOf(i) < happyMap[partner]) {
                unhappy++;
                break;
            }
        }
    }

    return unhappy;
};

console.log(unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]));
// console.log(unhappyFriends(2, [[1], [0]], [[1, 0]]));
// console.log(unhappyFriends(4, [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], [[1, 3], [0, 2]]));
// console.log(unhappyFriends(4, [[1,3,2],[2,3,0],[1,0,3],[1,0,2]], [[2,1],[3,0]]));

// my attempt

// var unhappyFriends = function(n, preferences, pairs) {
//     if (n === 2) return 0;
    
//     let unhappyFriends = 0;
    
//     for (const pair of pairs) {
//         const pair1 = pair[0];
//         const pair2 = pair[1];
        
//         if (preferences[pair1].indexOf(pair2) !== 0) {
//             unhappyFriends++;
//         }
        
//         if (preferences[pair2].indexOf(pair1) !== 0) {
//             unhappyFriends++;
//         }
//     }
//     return unhappyFriends;
// };

