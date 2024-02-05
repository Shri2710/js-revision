/* 
  Here is the reduce to add element of array

  const arr = [1,2,3,4,5,6];

  const mulArr = arr.reduce((accumalator,cuurent,index,arr)=>{
      return accumalator + current;
  },0)

*/

Array.prototype.customReduce = function(callFunction,initialValue){
    let sum =0;

    for(let i=0;i<this.length;i++){
         if(initialValue !== undefined){
            sum+= callFunction.call(undefined,initialValue,this[i],i,this)
         }else{
            sum = this[i];
         }
      }
      return sum;       
}

const sum=[1,2,3,4,5,6].customReduce((accumalator,curent,index,arr)=>{
  return accumalator + curent;
},0)

console.log(sum);