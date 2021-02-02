function multiplyBy() {
    let x = parseFloat(document.getElementById("number1").value); //Input
   
    let multiplyBy = x * 0.45359237; // Processing
    document.getElementById("output").innerHTML = 
     x + " pounds equals " + multiplyBy + " kilograms"; // Output
  }