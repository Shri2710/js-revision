const arr = [1,2,3,4,5,6];

// Methods

// arr.push(12);
// arr.unshift(0);
// arr.shift();
// console.log(arr);

// slice and splice

const originalArr = [1,2,3,4,5];

console.log('Original:',originalArr);

const sliceArr = originalArr.slice(0,3);

console.log('Slice',sliceArr);
console.log('Original:',originalArr);

const spliceArr = originalArr.splice(0,3);

console.log('Splice',sliceArr);
console.log('Original:',originalArr);