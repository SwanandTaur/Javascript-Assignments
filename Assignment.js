// Q. Ask user's age and check if eligible to vote.

// let age = prompt("Enter your age : ");
// if(age===null){
//     console.error("You cancel led it.");
// }
// else if(age.trim()===""){
//     console.error("Enter age error");
// }
// else {
//     age = Number(age);
//     if(isNaN(age)) console.error("Invalid age error");
//     else if(age>=18) console.log("Eligible for vote");
//     else if(age<0) console.error("Invalid age error");
//     else console.log("Not eligible for vote");
// }

// Q. Print multiplication table of 5 Use loop to print 5 x 1 to 5 x 10.

// let num = 5;

// for(let i=1;i<11;i++){
//     console.log(`${num} x ${i} = ${num*i}`);
// }

// Output:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// // Q. Count how many numbers between 1 and 15 are greater than 8 Loop and count conditionally.

// let count = 0;
// for(let i=1;i<15;i++){
//     if(i>8) count++;
// }
// console.log(`The numbers between 1 and 15 greater than 8 are ${count} Numbers.`);

// // Output:
//     // The numbers between 1 and 15 greater than 8 are 6 Numbers.

//Q. Ask user for password and print access status Hardcoded correct password. compare with user input.

// let password = "swanand@123";
// let enteredPass = prompt("Enter your password :");

// if(enteredPass === null) console.error("Canclled to enter password");
// else if(enteredPass===password) console.log("Correct Password");
// else console.error("Incorrect password error");

// Q. Allow only 3 attempts to enter correct password if user gets it right early, stop. If not -> "Account locked".

// let password = "swanand";
// let attempts = 0;
// let enteredPass;
// while(enteredPass !== password){
//     if(attempts===3) {
//         console.error("Account locked!");
//         break;
//     }
//     enteredPass = prompt("Enter the password :");
//     if(enteredPass===null){
//         console.error("Cancelled to enter password!");
//         break;
//     }
//     else if(enteredPass===password){
//         console.log("Correct password");
//         break;
//     }
//     attempts++;
// }

// Q. Ask user for words until they type "stop".Count how many times they typed "yes" Loop until "stop" is typed. Count "yes".

// let countYes = 0;
// let word;

// while(word !== "stop"){
//     word = prompt("Enter a Word :");
//     if(word === null){
//         console.error("Cancelled to enter words");
//         break;
//     }
//     word = word.trim().toLowerCase();
//     if(word === "yes"){
//         countYes++;
//     }
// }

// console.log(`You entered yes ${countYes} times.`);

//Q. Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

// for(let i=1;i<51;i++){
//     if(i%7 === 0){
//         console.log(i);
//     }
// }

// Output:
//     7
//     14
//     21
//     28
//     35
//     42
//     49

// Q. Sum of all odd numbers from 1 to 30 Add only odd numbers. Print Final sum.

// let sum = 0;

// for(let i=1; i<31;i++){
//     if(i%2 !== 0){
//         sum+=i;
//     }
// }

// console.log(`Total sum of odd numbers from 1 to 30 is ${sum}`);

// Output : Total sum of odd numbers from 1 to 30 is 225

// Q. Keep asking number until user enters an even number, use while loop. Stop only if Input is even.

// let input;

// while(true){
//     input = prompt("Enter a number :");
//     if(input === null){
//         console.error("Cancelled input");
//         break;
//     }
//     else if(input.trim() === ""){
//         console.error("Enter number");
//         break;
//     }
//     else if(isNaN(input)){
//         console.error("Invalid input");
//         break;
//     }
//     else if(input%2 === 0){
//         console.log(input);
//         console.error("Entered Even Number");
//         break;
//     }
//     else{
//         console.log(input);
//     }
// }



// Q. Print numbers between two user inputs Input start and end using prompt() -> print all between.

// let start = prompt("Enter starting from :");
// let end = prompt("Enter ending to :");

// if (start === null || end === null) {
//   console.error("Cancelled to enter input!");
// } else if (start.trim() === "" || end.trim() === "") {
//   console.error("Nothing entered input!");
// } else {
//   start = Number(start);
//   end = Number(end);
//   if (isNaN(start) || isNaN(end)) {
//     console.error("Invalid Input!");
//   } else {
//     if (start <= end) {
//         for (let i = start; i < end + 1; i++) {
//             console.log(i);
//         }
//     }
//     else{
//         for(let i=start;i>=end;i--){
//             console.log(i);
//         }
//     }
//   }
// }


// Q. Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.

let oddCount=0;

for(let i=1;i<=20;i++){
    if(i%2 !== 0){
        console.log(i);
        oddCount++;
        if(oddCount === 3) break;
    }
}

// Output :
    // 1
    // 3
    // 5