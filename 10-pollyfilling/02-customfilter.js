/* 
  Here is the filter to filter only even numbers

  const arr = [1,2,3,4,5,6];

  const mulArr = arr.filter((currentValue,index,arr)=>{
      return currentValue %2 === 0;
  })

*/

Array.prototype.customFilter = function(callFunction){
    let arr = [];

    for(let i=0;i<this.length;i++){
        if(callFunction(this[i],i,this)){
            arr.push(this[i]);
        }
       
    }

    return arr;
}

const mulArr=[1,2,3,4,5,6].customFilter((element,index,arr)=>{
  return element % 2 === 0;
})

console.log(mulArr);