//absolute
const number = -32;
// console.log(Math.abs(number));
const num = 2.34;
/* console.log(Math.round(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.random()*10);
 */


/* const random = []
for(let i = 0; i< 20; i++){
    let numbers=(Math.round(Math.random()*100));
    if(random.indexOf(numbers) == -1){
        random.push(numbers);
    }
    else{
        console.log(random,'duplicate ',numbers);
    }
}
console.log(random); */

//swap with temp
let price1 = 32;
let price2 = 45;
/* let temp = price1;
price1 = price2;
price2 = temp;
console.log(price1,price2); */

//swap with distructing
[price1,price2] = [price2,price1];
// console.log(price1,price2);

//max of two values
/* function largestOfTwo (num1,num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const largest = largestOfTwo(1233,422);
console.log('The largest of two numbers',largest); */


//max of three valeus
/* function largestOfThree (value1,value2,value3){
    if(value1 > value2 && value1 > value3){
        return value1;
    }
    else if(value2 > value1 && value2 > value3){
        return value2;
    }
    else{
        return value3;
    }
}
const largestValue = largestOfThree(23,43,35);
console.log('The largest 0f three numbers ',largestValue) */


//max with math.max method
/* let value1 = 23;
let value2 = 43;
let value3 = 42;
console.log(Math.max(value1,value2,value3)); */


//min of three values
/* function smallestOfThree (value1,value2,value3){
    if(value1<value2 && value1<value3){
        return value1;
    }
    else if(value2<value1 && value2<value3){
        return value2;
    }
    else{
        return value3;
    }
}
const smallest = smallestOfThree(32,24,31);
console.log('The smallest of three numbers ',smallest); */


//sum of array
/* let sum = 0;
function arraySum (numbers){
    for(let i = 0;i <numbers.length; i++){
        sum = sum + numbers[i];
    }
    return sum;
}
const arrayTotal = arraySum([12,21,21,32,31,14,14,116,25,23,100]);
console.log(arrayTotal); */


//largest value of array
/* function largestOfArray (numbers){
    let largest = numbers[0];
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}
const largestResult = largestOfArray([12,23,21,32,-43,23,123,15,18,26]);
console.log(largestResult); */


//smallest value of array
/* function smallestOfArray (numbers){
    let smallest = numbers[0];
    for(let i = 0; i <numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const smallestResult = smallestOfArray([12,23,21,32,-43,23,123,15,18,26]);
console.log(smallestResult); */


//smallest string of array
/* function smallestOfArray (string){
    let smallestArray = [];
    let smallest = string[0].length;
    for(let i = 0; i< string.length; i++){
        let element = string[i];
        if(element.length <smallest){
            smallest= element.length;
            name1 =element;
        }
    }
    smallestArray.push(smallest);
    smallestArray.push(name1);
    return smallestArray;
}
const smallestResult = smallestOfArray(['kobir','murad','somun','ashu','siam']);
console.log(smallestResult); */


//fibonacci
function fibonacci(n){
    let fibo = [0,1];
    if(typeof(n) != 'number'){
        return 'Please enter a valid number';
    }
    if(n<2){
        return 'Please enter positive number greater than 1';
    }
    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const fibonacciResult = fibonacci(15);
console.log(fibonacciResult);