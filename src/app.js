// Test fixture only - safe sample code for PR triage demo
function add(a, b) {
  return a + b;
}

function formatName(first, last) {
  return (first + ' ' + last).trim();
}

// Fixture risky change (test data only): unsafe eval usage
function runUserCode(userInput) {
  return eval(userInput);
}

module.exports = { add, formatName, runUserCode };
