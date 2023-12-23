// Dummy JavaScript Code with Vulnerabilities and Duplications

// Vulnerable function with a hardcoded password
function insecurePasswordCheck(password) {
  // Simulate insecure password check - never use this in real code
  if (password === "admin123") {
    console.log("Access granted");
  } else {
    console.log("Access denied");
  }
}

// Vulnerable function with a potential XSS vulnerability
function displayUserInput(input) {
  // Simulate displaying user input without proper validation - never use this in real code
  document.getElementById("output").innerHTML = "User Input: " + input;
}

// Duplicated code example
function duplicateCodeExample() {
  // Simulate duplicated code - avoid duplications in real code
  let x = 10;
  let y = 5;

  let result1 = x + y;
  console.log("Result 1:", result1);

  // Duplicated code
  let result2 = x + y;
  console.log("Result 2:", result2);
}

// Main function
function main() {
  // Simulate the main function
  let passwordInput = prompt("Enter password:");
  insecurePasswordCheck(passwordInput);

  let userInput = prompt("Enter input for display:");
  displayUserInput(userInput);

  duplicateCodeExample();
}

// Execute the main function
main();
