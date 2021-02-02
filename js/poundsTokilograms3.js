function multiplyBy() {
    let x = parseFloat(document.getElementById("number1").value); //Input
   
    let multiplyBy = x * "2.2046"; // Processing
    document.getElementById("output").innerHTML = 
    "The Pounds of " + x + " equals to " + multiplyBy + "! kilograms"; // Output
  }