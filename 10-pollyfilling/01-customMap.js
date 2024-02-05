/* 
  Here is the map to muliply all the elements of an array by 2

  const arr = [1,2,3,4,5,6];

  const mulArr = arr.map((currentValue,index,arr)=>{
      return currentValue * 2;
  })

*/
Array.prototype.customMap = function(callFunction){
      let arr = [];

      for(let i=0;i<this.length;i++){
         arr.push(callFunction(this[i],i,this));
      }

      return arr;
}

const mulArr=[1,2,3,4,5,6].customMap((element,index,arr)=>{
    return element * 2;
})

console.log(mulArr);
