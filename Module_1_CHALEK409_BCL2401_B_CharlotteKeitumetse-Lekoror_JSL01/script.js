

function validateSyntax() {
  let input = document.getElementById('petInput').value;

  // Validation logic
  const resultElement = document.getElementById("result"); // Get the result element

  let result = ""; // Placeholder for validation result
  
  // Check if input is a string
  if (typeof input !== 'string') {
    result = "Invalid Syntax: Please enter a string value for pet adoption details.";
  } else {
    // Check if the string starts with "pet_"
    if (!input.startsWith("pet_")) {
      result = "Invalid Syntax: Pet adoption details must start with 'pet_'.";
    } else {
      // Isolate the remaining characters after "pet_"
      const remainingString = input.slice(4);
  
      // Check if the remaining string contains only letters and numbers
      if (!remainingString.match(/^[a-zA-Z0-9]+$/)) {
        result = "Invalid Syntax: Pet adoption details can only contain letters and numbers.";
      } else {
        // All validations passed
        result = "Valid Syntax";
      }
    }
  }

  // Update the result element with the validation message
  resultElement.innerText = result;
}

