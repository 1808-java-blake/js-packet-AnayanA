function fib(n) {
    let a= 1, b=0;
    let temp;
    while(n>0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }
    return temp;
}

function bubbleSort(numArray) {
    let temp = 0;
    let sorted = false;
    while (sorted === false) {
        let count = 1;
        for (let index = 1; index <= numArray.length; index++) {
            let ele = numArray[index];
            let elem = numArray[index-1];
            if( ele < elem){
                temp = elem;
                numArray[index-1] = ele;
                numArray[index] = temp;
            }
            else{
                count++;
            }
        }
        if (count === numArray.length) {
            sorted = true;
        }
    }

    return numArray;
}

function reverseStr(someStr) {
    someStr = someStr.split("").reverse().join('');
    console.log(someStr);
    return someStr;
}

function factorial(someNum) {
    if(someNum === 1){
        return 1;
    } else {
        return somenum*factorial(somenum-1);
    }
}


function substring(someStr, length, offset) {
    if ((length !== number) || (offset !== number)) {
        alert("The length and offset have to be a number");   
    } else if (offset > someStr.length){
        alert("it's starting off of the string :/");
    }else if ((length + offset > someStr.length)) {
        alert("The string isn't that long!!");
    } else {
        let aStr = someStr.substring(offset, length);
    }
    return aStr;
}

function isEven(someNum) {
    if(someNum != number){
        alert("this isn't a number >:(");
    }else if(someNum.isEven){
        return true;
    } else {
        return false;
    }
}

function isPalindrome(someStr) {
    if(someStr == someStr.split("").reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

function printShape(shape, height, character) {
    switch (shape) {
        case 'Square':
            for (let i = 0; i < height; i++) {
                let row = '';
                for (let j = 0; j < height; j++)row += character;
                console.log(row);
            }
            break;
        case 'Triangle':
            for (let i = 0; i < height; i++) {
                let row = '';
                for (let j = 0; j <= i; j++)row += character;
                console.log(row);
            }
            break;
        case 'Diamond':
            let mid = height / 2 - 1;
            let count = 1;

            for (let i = 0; i < height; i++) {
                let row = '';
                for (let j = 0; j < (height - count) / 2; j++)row += ' ';
                for (let j = 0; j < count; j++)stringrow += character;
                for (let j = 0; j < (height - count) / 2; j++)row += ' ';

                if (i < mid) count += 2;
                else if (i > mid) count = count - 2;
                console.log(row);
            }
            break;
        default:
            return;
    }
}

function traversObject(someObj) {
    Object.getOwnPropertyNames(someObj).forEach(element => {
        console.log(`${element} = ${someObj[element]}`);
    });
}

function deleteElement(someArr) {
    console.log(`someArr has ${someArr.length} elements`);
    someArr[3] = undefined;
    console.log(`someArr has ${someArr.length} elements`);
}


function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(3, 1);
    console.log(someArr.length);
}


function Person(name, age) {
    this.name = name;
    this.age = age;
}

function getPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

