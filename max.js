const business =450;
const minister = 550;
const army = 600;
// if(business > minister){
//     console.log('Business person er pola is bigger');
// }
// else{
//     console.log('minister er pola is bigger');
// }


/* function findLargest (first,second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}
const largest = findLargest(345,534);
console.log(largest); */

// compare 3
/* if(business > minister && business> army){
    console.log('Business is bigger');
}
else if(minister > business && minister > army){
    console.log('minister is bigger');
}
else{
    console.log('army is bigger');
} */

function findLargest (first,second,third){
    if(first > second && first> third){
    return(first);
}
else if(second > first && second > third){
    return(second);
}
else{
    return(third);
}
}
const largest = findLargest(43,34,43);
console.log('The largest in three numbers of ',largest);

var max = Math.max(business,army,minister);
// console.log(max);


function findSmallest(first ,second,third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else{
        return third;
    }
}
const smallest = findSmallest(43,34,43);
console.log('The smallest in three numbers of ',smallest);