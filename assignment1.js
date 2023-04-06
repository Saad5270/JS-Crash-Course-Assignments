// question 1
// Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let num1= +prompt('Enter first number: ');
let num2= +prompt('Enter second number: ');

if(num1>num2){
    console.log('First number is greater that is '+num1);
}else if(num2>num1){
    console.log('Second number is greater that is '+num2);

}else{
    console.log('Incorrect input or numbers are equal!');
}

// question 2
// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.
// Sample: 3
// Output : The sign is +
// Sample: -5
// Output : The sign is -


let num= +prompt('Enter your number: ');

if(num>=0){
    alert('The sign is +')
}else{
    alert('The sign is -')
}

// question 3
// Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let n1= +prompt('Enter first number: ');
let n2= +prompt('Enter second number: ');
let n3= +prompt('Enter third number: ');
let n4= +prompt('Enter fourth number: ');
let n5= +prompt('Enter fifth number: ');

if(n1>n2 && n1>n3 && n1>n4 && n1>n5){
    console.log('The largest number is '+n1);
}else if(n2>n1 && n2>n3 && n2>n4 && n2>n5){
    console.log('The largest number is '+n2);
}else if(n3>n1 && n3>n2 && n3>n4 && n3>n5){
    console.log('The largest number is '+n3);
}else if(n4>n1 && n4>n2 && n4>n3 && n4>n5){
    console.log('The largest number is '+n4);
}else if(n5>n1 && n5>n2 && n5>n3 && n5>n4){
    console.log('The largest number is '+n5);
}else{
    console.log('Incorrect number or are equal');
}

// question 4
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
// ----------
// ----------

for(let i=0; i<=15; i++){
    if(i%2===0){
        console.log(i+" is even");
    }else{
        console.log(i+" is odd")
    }
}

// question 5
// Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A


let avg= +prompt('Enter average: '); //did not find any percentage because it was not asked 

if(avg<100 && avg>90){
    console.log('Grade is A');
}else if(avg<90 && avg>80){
    console.log('Grade is B');
}else if(avg<80 && avg>70){
    console.log('Grade is C');
}else if(avg<70 && avg>60){
    console.log('Grade is D');
}else if(avg<60 && avg>50){
    console.log('Grade is F');
}else{

    console.log('Incorrect input or Out of Range for Grading')
}

// question 6
// Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for(let i=1; i<=100; i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }else if(i%5===0){
        console.log("Buzz");
    }else if(i%3===0){
        console.log("Fizz");
    }else{  
        console.log(i)
    }
}

// question 7
// Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for(let i=1;i<=5;i++){
    let x= '';
    for(let j=1; j<=i; j++){
        x += '* ';
    }
    console.log(x)
}
