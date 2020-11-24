// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let cache = [root];
    const counters = [];

    while (cache.length) {
        counters.push(cache.length);
        const newCache = [];
        cache.forEach(node => newCache.push(...node.children));
        cache = newCache;
    }
    return counters;
}

module.exports = levelWidth;
