//singleton
// Object.create()

//object literals


const myKey = Symbol('key1');
const JsUser = {name:'Shri',age:24,loc:"Karnataka",[myKey]:"Hellooo"};

console.log(JsUser);