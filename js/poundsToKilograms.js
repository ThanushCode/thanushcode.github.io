function poundsToKilograms() {
      let text = document.getElementById("pounds").value; //Input
     
      let pounds = parseFloat (text) // Processing
      let kilograms = pounds * 0.45359237; 
      document.getElementById("output").textContent=  //output
      " pounds equals to " + `${kilograms.toFixed (1)}` + " kilograms " ;  
    }
  

   
  