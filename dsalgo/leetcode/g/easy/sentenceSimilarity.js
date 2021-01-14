// Runtime: 84 ms, faster than 62.16% of JavaScript online submissions for Sentence Similarity.
// Memory Usage: 38.9 MB, less than 91.89% of JavaScript online submissions for Sentence Similarity.

const areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;

    const obj = {};

    for (let i = 0; i < sentence1.length; i++) {
        if (sentence1[i] === sentence2[i]) {
            continue;
        } else {
            obj[sentence1[i]] = sentence2[i];
        }
    }
    
    for (let i = 0; i < similarPairs.length; i++) {
        debugger
        const left = similarPairs[i][0];
        const right = similarPairs[i][1];
        if (obj[left] === right) {
            debugger
            delete obj[left];
            delete obj[right];
        } else if (obj[right] === left) {
            debugger
            delete obj[right];
            delete obj[left];
        }
    }
    return !Object.keys(obj).length;
    // return obj;
};


// const areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
//     if (sentence1.length !== sentence2.length) return false;
//     debugger
//     for (let i = 0; i < sentence1.length; i++) {
//         debugger
//         if ((sentence1[i] === sentence2[i]) || ((sentence1[i] === similarPairs[i][0] && sentence2[i] === similarPairs[i][1]) || (sentence1[i] === similarPairs[i][1] && sentence2[i] === similarPairs[i][0]))) {
//             debugger
//         } else {
//             debugger
//             return false;
//         }
//     }
//     debugger
//     return true;
// };

// const sent1 = ["an","extraordinary","meal"]
// const sent2 = ["one","good","dinner"]
// const pairs = [["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],["excellent","good"],["fine","good"],
// ["nice","good"],["any","one"],["some","one"],["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],
// ["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],["drink","have"],["eat","have"],["take","have"],
// ["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],
// ["keep","own"],["have","own"],["extremely","very"],["actually","very"],["really","very"],["super","very"]];
// const sent1 = ["great","acting","skills"];
// const sent2 = ["fine","drama","talent"];
// const pairs = [["great","fine"],["drama","acting"],["skills","talent"]];
// const sent1 = ["great","acting","skills"];
// const sent2 = ["fine","painting","talent"];
// const pairs = [["great","fine"],["drama","acting"],["skills","talent"]];
// const sent1 = ["great"];
// const sent2 = ["doubleplus", "great"];
// const pairs = [["great", "doubleplus"]];
// const sent1 = ["great", "hi"];
// const sent2 = ["great", "hi"];
// const pairs = [];
const sent1 = ["this","summer","thomas","get","actually","actually","rich","and","possess","the","actually","great","and","fine","vehicle","every","morning","he","drives","one","nice","car","around","one","great","city","to","have","single","super","excellent","super","as","his","brunch","but","he","only","eat","single","few","fine","food","as","some","fruits","he","wants","to","eat","an","unique","and","actually","healthy","life"];
const sent2 = ["this","summer","thomas","get","very","very","rich","and","possess","the","very","fine","and","well","car","every","morning","he","drives","a","fine","car","around","unique","great","city","to","take","any","really","wonderful","fruits","as","his","breakfast","but","he","only","drink","an","few","excellent","breakfast","as","a","super","he","wants","to","drink","the","some","and","extremely","healthy","life"];
const pairs = [["good","nice"],["good","excellent"],["good","well"],["good","great"],["fine","nice"],["fine","excellent"],["fine","well"],["fine","great"],["wonderful","nice"],["wonderful","excellent"],["wonderful","well"],["wonderful","great"],["extraordinary","nice"],["extraordinary","excellent"],["extraordinary","well"],["extraordinary","great"],["one","a"],["one","an"],["one","unique"],["one","any"],["single","a"],["single","an"],["single","unique"],["single","any"],["the","a"],["the","an"],["the","unique"],["the","any"],["some","a"],["some","an"],["some","unique"],["some","any"],["car","vehicle"],["car","automobile"],["car","truck"],["auto","vehicle"],["auto","automobile"],["auto","truck"],["wagon","vehicle"],["wagon","automobile"],["wagon","truck"],["have","take"],["have","drink"],["eat","take"],["eat","drink"],["entertain","take"],["entertain","drink"],["meal","lunch"],["meal","dinner"],["meal","breakfast"],["meal","fruits"],["super","lunch"],["super","dinner"],["super","breakfast"],["super","fruits"],["food","lunch"],["food","dinner"],["food","breakfast"],["food","fruits"],["brunch","lunch"],["brunch","dinner"],["brunch","breakfast"],["brunch","fruits"],["own","have"],["own","possess"],["keep","have"],["keep","possess"],["very","super"],["very","actually"],["really","super"],["really","actually"],["extremely","super"],["extremely","actually"]];

console.log(areSentencesSimilar(sent1, sent2, pairs));