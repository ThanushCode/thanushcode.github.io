function multiplyBy() {
    let text = parseFloat(document.getElementById("pounds").value); //Input
    
    let pounds = parseFloat (text); // Processing
    let kilograms = pounds * 0.45359237;
    document.getElementById("output").innerHTML =          // output
      " pounds equals to" +  `${kilograms.toFixed (1)}` + " kilograms";
  }
  

