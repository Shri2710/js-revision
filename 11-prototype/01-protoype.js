const obj = {
    name:"Shriganesh",
    skills:"Javascript, React, Angular, Node"
}

const obj2 = {
    city:"Kumta",
    __proto__:obj
}

console.log(obj2.skills);