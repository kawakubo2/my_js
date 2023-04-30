class SetUtil {
    constructor(set1, set2) {
        this.set1 = set1;
        this.set2 = set2;
    }
    union() {
        const result = new Set();
        for (const e of this.set1) {
            result.add(e);
        }
        for (const e of this.set2) {
            result.add(e);
        }
        return result;
    }

    intersect() {
        const result = new Set();
        for (const e of this.set1) {
            if (this.set2.has(e)) {
                result.add(e);
            }
        }
        return result;
    }

    difference(set1, set2) {
        const result = new Set();
        for (const e of this.set1) {
            if (!this.set2.has(e)) {
                result.add(e);
            }
        }
        return result;
    }
}
/*
const s1 = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const s2 = new Set([1, 2, 4, 8, 16, 32, 64]);

const setUtil = new SetUtil(s1, s2);
console.log(setUtil.union());
console.log(setUtil.intersect());
console.log(setUtil.difference());
*/