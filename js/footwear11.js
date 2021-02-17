function shoesSelection() {
    //  lrt the user click from a text menu
   let wearable;
   let climate = document.getElementById("user_chooses_the_Weather").value;
   
   
   //PROCESSING  SWITCH function run and choose the answer and break after move to output
   switch(climate){
   case "unknown":
   wearable = " shoes";
   break;
   case "hot":
   wearable = "sandals";
   break;
   case "snow":
   wearable = "boots";
   break;
   case "rain":
   wearable = "galoshes";
   break;
    
   }



    // Determine the output and show it to the user or  Display the message to the user.
    // document.getElementById('output').innerHTML ="The sum of " + x + " and " + y + " equals " + sum + "!";
   document.getElementById("output").innerHTML = wearable;
 }