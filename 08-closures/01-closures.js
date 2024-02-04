const sum = (a)=>{
    var c=10;
    return (b)=>{
        return a+b+c;
    }
}

const ret = sum(10);
console.log(ret(10));