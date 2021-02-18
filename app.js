//nodemon app.js

// AND (&&)
// Logical && operator use for Boolean operations on the TWo Values
// it returns TRUE if and only if its first operand and its SECOND operand are TRUE.
// if one or both operands are false then logical (&&) operator retuns false

let x = 10,
  y = 10;
// && operator
if (x == 10 && y == 10) {
  console.log("true");
} else {
  console.log("false");
}

// Or Operator( || )
// logical ( || ) operatator perform Boolean operations on two ralational values
// it will return true if one or bothe operand evaluate to True.
// it means when both expressions evaluate to false then || operator retun fALSE otherwise its return TRUE

// || OR operator
if (x == 1 || y == 1) {
  console.log("true");
} else {
  console.log("false");
}

// NOT Operator( ! )
// The (!) operator is an unary operator and it is placed befor the single operand
//  The use of ( ! ) operator is to invert the Boolean Expression
// it means if
//  x = true;
//    !x invert x bollean value. Now x is equal to False.
let z = true;
console.log(!z); // result will be fasle = inver value of the z bollean variable to false

//( If )statement = fundamental control statement that allow JavaScript to make decision
// ( If else) statement = allow us to choose conditional choices
// if statement has two forms

//      if (expression){    // expression is condition That may be true or false
//          statement ;     // we specify two staement for If Condition
//          }

//      if (expression){
//      statement1 ;  //statement will execute when the expression is true
//       else
//       if (expression) {
//       statement2    // statement will execute when if expression is false
//        }

   let time2 = 10
   if ( time2 < 12){
  console.log("Good Morning")
    }

// it will not retun anything becouse we dont specify any message to false statement
//let time = 15;
//if ( time < 12){
//   console.log("Good Morning")
//}

let time = 15;
if (time < 12) {
  console.log("Good Morning"); // True Statemnt in (if) block
} else {
  console.log("Good afternoon"); // always specify false statement in (else) Block 
}

// Compond STATEMENT 
let time3 = 10;
if (time3 < 12) {
  console.log("Good Morning"); // True Statemnt in (if) block
  console.log("welcome to Learn Java Script ");
} else {
  console.log("Good afternoon"); // always specify false statement in (else) Block 
}

// Make Nested if and else Statement using compount statement 
let time4 = 9;
if (time4 < 12) { // Assume time as 12PM (time 12) retun True
  console.log("Good Morning"); // True Statemnt in (if) block
  if (time4==9){
      console.log ("The time is to learn Java Script ")
  }
} else {
  console.log("Good afternoon"); // always specify false statement in (else) Block 
}

// You can also put (else) inside the nested if statement // create a ladder using if and (else if) statement
let time1 = 20; // check with 13
if (time1 < 12) { // Assume time as 12PM (time 12) retun True
  console.log("Good Morning"); // True Statemnt in (if) block
}
else if (time1 < 17){  //17:00 =5pm
      console.log ("Good afternoon");
  }
 else {
  console.log("Good evening"); // always specify false statement in (else) Block 
}