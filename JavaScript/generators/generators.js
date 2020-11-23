//fundamentals of generators

function* numbers() {
    const result = 1 + 1;
    return 20 + (yield result);
}

const generator = numbers();
console.log(generator.next()); // { value: 2, done: false } - on the first call, function "yields" to result;
console.log(generator.next(10)); // { value: 30, done: true } - on the second call, value is now the return value of 20 + the passed in value;


// example

function* list() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const generator2 = list();
const vals = [];
for (let val of generator2) {
    vals.push(val);
}

console.log(vals); // [ 1, 2, 3, 4, 5 ]

function* list2() {
    yield 1;
    yield 2;
    yield* morelist();
    yield 6;
}

function* morelist() {
    yield 3;
    yield 4;
    yield 5;
}

const generator3 = list2();
const moreVals = [];
for (let val of generator3) {
    moreVals.push(val);
}

console.log(moreVals); // [ 1, 2, 3, 4, 5, 6 ]

// Tree example

class Tree {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }

    *printValues() {
        yield this.value;
        // DFS implementation using generator
        for (let child of this.children) {
            yield* child.printValues();
        }
    }
}

const tree = new Tree(1, [
    new Tree(2, [new Tree(4)]),
    new Tree(3)
]);



console.log(tree.printValues().next());

const dfsNodes = [];
for (let val of tree.printValues()) {
    dfsNodes.push(val);
}

console.log(dfsNodes);