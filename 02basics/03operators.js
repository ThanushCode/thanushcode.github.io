//node 02basics/03operators.js
//+-*/% modulus

//var num1 = 12
//var num2 = 5

//console.log (num1 * num2);

//var answer = num1 > num2 ;

//console.log(answer);

DiscountPrice = (listingPrice-sellingPrice)/listingPrice *100;

var sellingPrice = 199;
var listingPrice = 799;
var discountPercentage = ((listingPrice-sellingPrice) / listingPrice) *100;

console.log("Discount percentage is:" + discountPercentage);
displayDiscountPercentage = Math.round(discountPercentage);
console.log(displayDiscountPercentage + "%off");

var result = listingPrice > sellingPrice;

console.log(result);

console.log(typeof result);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence