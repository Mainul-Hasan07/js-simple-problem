/* const numbers = [43,32,43,54,32,43,54];
let sum = 0;
for(let i =0; i< numbers.length; i++){
    let  number = (numbers[i]);
    sum = sum +number;
}
console.log(sum); */


function arrayTotal(number){
    let sum = 0;
    for(let i = 0; i< number.length; i++){
        let element = number[i];
        sum = sum + element;
    }
    return sum;
}
let array = [23,32,12,32,12,43,22,12];
let arrayResult = arrayTotal(array);
console.log(arrayResult);