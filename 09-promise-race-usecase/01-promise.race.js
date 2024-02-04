const timeOutFunc = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Operation timeout");
        },300)
    })
}

const actualCall = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Success");
        },200)
    })
}

const res = Promise.race([actualCall(),timeOutFunc()]);

res
.then((res)=>{
    console.log(res);
})
.catch((e)=>{
    console.log(e);
})