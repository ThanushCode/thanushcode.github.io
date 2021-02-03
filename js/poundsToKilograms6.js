<script src="js/poundsToKilograms.js" defer></script>
 function addNumbers() {
        
    let p = parseFloat(document .getElementById('inputpounds') .value);         
    let k = parseFloat (document .getElementById('inputkilograms') .value);              
    let sum = p * "2.2046";
    document.getElementById("output").innerHTML = multiply
    let multiply = "p" * "2.2046";
    }

    function addNumbers() {
        
        let p = parseFloat(document .getElementById('inputpounds') .value);         
        let k = parseFloat (document .getElementById('inputkilograms') .value);              
        let sum = p * "2.2046";
        document.getElementById("output").innerHTML = multiply
        let multiply = "p" * ("num.toFixed(1) is "0.45");
        }

        function multiplyBy() {
            let p = parseFloat(document.getElementById("inputpounds").value);
            let k = parseFloat(document.getElementById("inputkilograms").value);
            let multiply = p * "2.2046";
            document.getElementById("output").innerHTML = p;
          }

           //Input
           function poundsToKilograms() {
            let text = (document.getElementById("pounds").value); 
            // Processing
            let pounds = parseFloat(text);
            let kilograms = 1 * 0.45359237; 
            // output
            document.getElementById("output").textContent =         
               `${kilograms.tofixed(1)}` ;
            }


            <body>
            <header>
              <h1>Week 5: Convert Pounds to Kilograms</h1>
              <h2>Thanush Ganesh</h2>
            </header>
            <main>
                <h3>Convert Pounds to Kilograms</h3>
                <label>pounds: <input type="text" id="number1" /></label>
                <label>  <button type="button" onclick="poundsToKilograms()">Convert</button> </label>
              
                <hr />
                <p><span id="output"></span></p>
              
            <script>
                function poundsToKilograms() {
              let text = document.getElementById("pounds").value; //Input
             
              let pounds = parseFloat (text) // Processing
              let kilograms = pounds * 0.45359237; 
              document.getElementById("output").textContent=  `${kilograms.toFixed (1)}` ;  //output
            }
          
            </script>
            
            </main>
              
            <footer>
              &copy;2021 &bull; Thanush Ganesh &bull; BYU-Idaho &bull; CIT 160
            </footer>
            
          </body>
        </html>
        
        


        <script>
    function poundsToKilograms() {
      let text = document.getElementById("pounds").value; //Input
     
      let pounds = parseFloat (text) // Processing
      let kilograms = pounds * 0.45359237; 
      document.getElementById("output").textContent=  `${kilograms.toFixed (1)}` ;  //output
    }
  </script>