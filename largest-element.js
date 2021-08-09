//largest positive number


/* function largestElement (numbers){
    let largest = 0;
    for(let i = 0; i< numbers.length;i++){
        const element = numbers[i];
        if(element > largest){
            largest = element
        }
    }
    return largest;
}

const ages = [12,23,14,15,45,17];
const oldest = largestElement(ages);
console.log(oldest); */




//Largest negative number


/* function largestElement (numbers){
    let largest = numbers[0];
    for(let i = 0; i< numbers.length;i++){
        const element = numbers[i];
        if(element > largest){
            largest = element
        }
    }
    return largest;
}

const ages = [-12,-23,-14,-15,-45,-17];
const oldest2 = largestElement(ages);
console.log(oldest2); */


//Smallest positive Number

/* function smallestElement(numbers){
    let smallest = numbers[0];
    for(let i = 0; i< numbers.length; i++){
        const element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const ages = [12,23,14,15,45,7];
const youngest = smallestElement(ages);
console.log(youngest); */


//Smallest negative number

/* function smallestElement(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const ages = [-12,-32,-21,-14,-17,-24,-4,-100];
const youngest = smallestElement(ages);
console.log(youngest); */


//Smallest string

function smallestElement(string){
    let smallest = (string[0].length);
    for (let i = 0; i < string.length; i++){
        const element = string[i];
        if(element.length < smallest){
            smallest = element.length;
            smallName = element
        }
    }
    return {smallName,smallest};
    
}
const names = ['kobir','somun','mainul','kuddus','kawser','siam','ashu','nazmul'];
const smallestResult = smallestElement(names);
console.log(smallestResult );