//fundamentals of generators

function* numbers() {
    const result = 1 + 1;
    return 20 + (yield result);
}

const generator = numbers();
console.log(generator.next()); // { value: 2, done: false } - on the first call, function "yields" to result;
console.log(generator.next(10)); // { value: 30, done: true } - on the second call, value is now the return value of 20 + the passed in value;
