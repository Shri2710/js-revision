const data = [
    {
        name:"Shriganesh",
        profession:"SDE-2"
    },
    {
        name:"Ramakrishna",
        profession:"SDE-3"
    }
];

function getDatas(){
    setTimeout(()=>{
        data.forEach((dat,index)=>{
            console.log(dat.name);
        })
    },1000);
}

function createData(dat){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            data.push(dat);
            resolve();
        },2000)
    })
}

async function execute(){
    await createData({name:"Sagar",profession:"Team Lead"});
    getDatas();
}

execute();