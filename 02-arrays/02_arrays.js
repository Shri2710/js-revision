const ramayana = ['ram','lakshmana','bharata','shatrugna'];
const mahabarath = ['krishna','arjuna','vidhura'];

const combined = ramayana.concat(mahabarath);

// console.log(combined);

const spreadOp = [...ramayana,...mahabarath];

// console.log(spreadOp);

// const array = [1,2,3,[4,5,6],7,[6,[99,3993]]];
// console.log(array);

// const flattenArr = array.flat(Infinity);

// console.log(flattenArr);


console.log(Array.isArray("Shriganesh"));
console.log(Array.from("Shriganesh"));
console.log(Array.from({name:"Shriganesh"}))
console.log(Array.of(100,200,300));
