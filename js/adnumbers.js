function addNumbers() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    // MATH
    let addition = num1 + num2;

    document.getElementById('output').innerHTML = addition;

}