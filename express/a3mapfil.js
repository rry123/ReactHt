//another way of writing function


function sum(a, b){
    return a+b;
}


const sum1 = (a,b) =>{
    return a+b;
}


console.log(sum(3,4) +" "+ sum1(6, 9));

//given an array give me back a new array in which every value is multiplied by2

// 1 2 3 4 5 
// output 2 4 6 8 10

const input = [1, 2, 3, 4, 5];

//solution

function transform(i){
    return i*2;
}

const ans = input.map(transform);
console.log(ans);


// other way

const ans1 = input.map(function(i){
    return i*2;
})

console.log(ans1);



//given an input array give me back all the even values from it

const arr = [1, 2, 3, 4, 5];

//filter method

function filerLogic(n){
   if(n%2==0){
    return true;
   }
   else{
    return false;
   }
}


const ans2 = arr.filter(filerLogic);
console.log(ans2);


const ans3 = arr.filter(function(n){
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }
})

console.log(ans3);
