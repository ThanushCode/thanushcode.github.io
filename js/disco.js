//input: customer's subtotal amount and the day of week
let subtotal = 100;
let dayOfWeek = new Date().getDay();

//processing: calculate the customer's discount if they buy in Tuesday or Wednesday.
let total = 0;
if (subtotal > 50 && dayOfWeek == 2) {
  total = subtotal * 0.9;
} else if (subtotal > 50 && dayOfWeek == 3) {
  total = subtotal * 0.9;
} else {
  total = subtotal;
}
total = total * 1.06;

//output: the total amount after discount and adding tax

console.log("$" + total.toFixed(2));
// nodemon js/disco.js
