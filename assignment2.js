//question#1
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

function closure(x){
    let num= +prompt('Enter any number: ');

    function add(x,num){
        return x+num;    
    }
    return add(x,num);
}

console.log(closure(5))



// //question#2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

function arrFind(arrVal,arrIndex){
    
    let arr= [54,2,88,66,44,2,8,9,7];
    
    
    if(arr[arrIndex]===arrVal){
        return true  
    }

    else if(arrIndex>arr.length-1){
        return false
    }

    else{
        return arrFind(arrVal, arrIndex+1);
        
    }
}

let arrVal= +prompt('Enter array value you want to find: ');
console.log(arrFind(arrVal,0));


// //question#3
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

function newParaHtml(text){

    const newPara= document.createElement('p');
    let insText= document.createTextNode(text);

    newPara.appendChild(insText);

    document.body.appendChild(newPara);

}

let text = prompt('Enter your text to show: ');
newParaHtml(text);


// question#4
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

function newItemtoList(item){
    const fruitList= document.getElementById('fruitList');
    const newItem = document.createElement('li');
    let itemText= document.createTextNode(item);

    newItem.appendChild(itemText);

    fruitList.appendChild(newItem);
}

let item= prompt('Enter item name: ');
newItemtoList(item);


// question#5
// Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.

function changeBgColor(elementId, color){
    elementId.style.backgroundColor = color;
}

const elementId= document.getElementById('unorderedHead');
let Bgcolor= '#F7421B';

changeBgColor(elementId, Bgcolor)



// question#6 and question#7
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.

// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.


function storeObjtoLocal(key,obj){ //question#6
    let empArr= [];
    empArr.push(obj)
    let stringify= JSON.stringify(empArr);
    localStorage.setItem(key, stringify)    
}

let objBio= {
    name: 'Saad Ibrahim',
    id: 124219,
    className: 'JavaScript'
}

storeObjtoLocal('Bio',objBio)

function getObjFromLocal(key) { //question#7
    let storedObj = localStorage.getItem(key);
    let retrievedObj = JSON.parse(storedObj);

    return retrievedObj;
  }

console.log(getObjFromLocal('Bio'));


//question#8
// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

function storingObj(obj){
    
    let keys = Object.keys(obj);
    for(let i=0; i<keys.length; i++) {
      var key = keys[i];
    // console.log(key,obj[key]);

      localStorage.setItem(key, JSON.stringify(obj[key]));
    }

    var retrievedObj2 = {};
    for(var i=0; i<localStorage.length; i++){
       
        var key= localStorage.key(i);
        retrievedObj2[key]= JSON.parse(localStorage.getItem(key));
    }
    return retrievedObj2;
}

let obj= {
    name: 'Saad',
    university: 'Indus',
    id: 1855,
    DOB: '29-March-2001'

}

console.log(storingObj(obj))