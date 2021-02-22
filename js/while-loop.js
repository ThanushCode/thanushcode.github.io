/*i = 1;
while (i < 3) {
  alert(i);
  i++;
}
alert("done");

/*

1.reserve space in main memory for a variable named i and store the value 1 into it
2.test if i is less than 3, which is true
3.because i is less than 3, execute the statements in the body of the while loop
    a,open a popup window that contains the number 1 and wait for the user to click OK in the popup window
    b,add 1 to i so that its new value is 2
4.test if i is less than 3, which is true
5.because i is less than 3, execute the statements in the body of the while loop
    a,open a popup window that contains the number 2 and wait for the user to click OK in the popup window
    b,add 1 to i so that its new value is 3
6.test if i is less than 3, which is false
7.because i is not less than 3, skip the statements that are in the body of the loop and execute the statements that are written after the body of the loop

*/

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
}
