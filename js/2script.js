function addNumbers() {
    let x = parseFloat(document.getElementById("number1").value); //Input
    let y = parseFloat(document.getElementById("number2").value); //Input
    let sum = x + y; // Processing
    document.getElementById("output").innerHTML =
        "The sum of " + x + " and " + y + " equals " + sum + "!"; // Output
}