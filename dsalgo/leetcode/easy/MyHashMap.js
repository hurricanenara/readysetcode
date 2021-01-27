
class Bucket {
    constructor() {
        this.bucket = [];
    }

    get(key) {
        for (let [k, v] of this.bucket) {
            if (k === key) return v;
        }
        return -1;
    }

    update(key, value) {
        let found = false;
        this.bucket.forEach((kv, i) => {
            if (key === kv[0]) {
                this.bucket[i] = [key, value];
                found = true;
                return;
            }
        })
        if (!found) this.bucket.push([key, value]);
    }

    remove(key) {
        this.bucket.forEach((kv, i) => {
            if (key === kv[0]) this.bucket.splice(i, 1);
        })
    }
}

class MyHashMap {
    constructor() {
        this.keySpace = 2069;
        this.hashMap = [];
        for (let i = 0; i < this.keySpace; ++i) {
            this.hashMap.push(new Bucket());
        }
    }

    put(key, value) {
        const hashKey = key % this.keySpace;
        this.hashMap[hashKey].update(key, value);
    }

    get(key) {
        const hashKey = key % this.keySpace;
        return this.hashMap[hashKey].get(key);
    }

    remove(key) {
        const hashKey = key % this.keySpace;
        return this.hashMap[hashKey].remove(key);
    }
}

// X

const b = new Bucket();
b.bucket = [["a", 2]];
console.log(b.bucket);
b.update("b", 5);
console.log(b.bucket);
b.remove("b");
console.log(b.bucket);