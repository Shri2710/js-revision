function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// console.log(add(2)(3)(5));

//Infinite Currying
// sum(2)(3)(4)(5)(6).....(n)

function add(a){
    return function(b){
        if(b){
            return add(a+b);
        }else{
            return a;
        }
    }
}

console.log(add(2)(3)());