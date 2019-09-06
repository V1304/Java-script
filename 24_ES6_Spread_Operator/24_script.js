let numbers = [10,45,50,981,61,1,781,84,198,18,189];
let minNumber = numbers[0];
for(let i=0; i<numbers.length; i++){
    if(minNumber > numbers[i]){
        minNumber = numbers[i];
    }
}
console.log(`Min Number : ${minNumber}`);

// Spread Operator
minNumber = Math.min(...numbers);
console.log(`Min Number : ${minNumber}`);

// Spread operator to merge more arrays
let array1 = [10,20,30,40];
let array2 = [...array1 , 50,60,70,80];
console.log(array2);

// Create a copy of an array slice()
let arr1 = [10,20,30,40];
let arr2 = [...arr1];
arr1.splice(2);
console.log(arr2);

