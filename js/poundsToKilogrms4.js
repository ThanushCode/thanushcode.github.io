// round the display answer to one decimal and label the output, e.g., 50.6 Kilograms
      // program should correctly hand REAL NUMBERS (parsefloat) such as 160.5. This input should return and display 72.8 kilograms a round to one decimal answer
      // program must use a button click to handle the conversion event

                //Input
            function multiplyBy() {
                let text = parseFloat(document.getElementById("pounds").value); 
                // Processing
               
                let multiplyBy = x * 0.45359237; 
                // output
                document.getElementById("output").innerHTML =         
                  x + " pounds equals " + `${multiplyBy.tofixed(1)}` + " kilograms";
                }

                