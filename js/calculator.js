function checkProblem() {
    // Get 2 numbers as num1 and num2, operator= op, and result = res.
    // for an arithmetic test from the user.
    let num1 = parseFloat(document.getElementById("num1InputBox").value);
    let op = document.getElementById("mathematicaloperator").value;
    let num2 = parseFloat(document.getElementById("num2InputBox").value);
    let result = parseFloat(document.getElementById("resInputBox").value);
    let correctAnswer = document.getElementById("mathematicaloperator") //Computed the calculation to compare with res

    switch (op) {
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = num1 / num2;
        break;
    }
    // notify the user if the answers they enter correct or wrong:
    // Output

    if (result == correctAnswer) {
      document.getElementById("outputDiv").innerHTML = "Correct 🏆 "
    } else {
      document.getElementById("outputDiv").innerHTML = "Incorrect 😢 "
    }
  }