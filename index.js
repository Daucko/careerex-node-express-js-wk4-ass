// 1. Function that takes a student’s score and logs "Passed" if it’s 180 and above, else logs "Failed"
function checkResult(score) {
  if (score >= 180) {
    console.log('Passes');
  } else {
    console.log('Failed');
  }
}
// Call the checkResult function with argument
checkResult(280);
checkResult(180);
checkResult(120);

// 2. Function that accepts an age and returns "You are eligible to vote" if the age is 18 or above, otherwise "Not eligible".
function checkVotingEligibility(age) {
  if (age >= 18) {
    return 'You are eligible to vote';
  } else {
    return 'Not eligible';
  }
}
// Call the checkVotingEligibility function with different argument and log the output
console.log(checkVotingEligibility(20));
console.log(checkVotingEligibility(16));

// 3. Function that takes a name and score and then evaluate performance
function evaluatePerformance(name, score) {
  if (score >= 90) {
    return 'Excellent';
  } else if (score >= 75) {
    return 'Good';
  } else if (score >= 50) {
    return 'Average';
  } else {
    return 'Fail';
  }
}
// Call evaluatePerformance function with different arguments and log the output
console.log(evaluatePerformance('Tosin', 95));
console.log(evaluatePerformance('Amina', 80));
console.log(evaluatePerformance('Bola', 60));
console.log(evaluatePerformance('David', 40));

// 4. Function that takes two boolean values: hasID and isAbove18. Return "Access granted" only if both are true.
function checkAccess(hasID, isAbove18) {
  if (hasID && isAbove18) {
    return 'Access granted';
  } else {
    return 'Access denied';
  }
}
// Call checkAccess function with different arguments and log the output
console.log(checkAccess(true, true));
console.log(checkAccess(true, false));
console.log(checkAccess(false, true));
console.log(checkAccess(false, false));

//5. For loop that prints "Pass" if it’s above 50 or "Fail" if it’s 50 or below, from array of scores.
studentScores = [65, 42, 78, 30, 90, 50, 83, 39, 51, 26];
for (let i = 0; i < studentScores.length; i++) {
  const score = studentScores[i];
  if (score > 50) {
    console.log('Pass');
  } else {
    console.log('Fail');
  }
}

// 6. Arrow function that returns "Yes" if a student passed both Math and English (score ≥ 50), else "No".
const hasPassedBoth = (mathScore, englishScore) => {
  if (mathScore >= 50 && englishScore >= 50) {
    return 'Yes';
  } else {
    return 'No';
  }
};

// 7. Function that checks if a user has either an email or a phone number before signing up.
function canSignUp(user) {
  if (user.email) {
    return 'Valid';
  } else if (user.phoneNumber) {
    return 'Valid';
  } else {
    return 'Invalid';
  }
}
// Create 3 random users
const user1 = { email: 'test@example.com', phoneNumber: '' };
const user2 = { email: '', phoneNumber: '1234567890' };
const user3 = { email: '', phoneNumber: '' };
// Call canSignUp with arguments and log the output
console.log(canSignUp(user1));
console.log(canSignUp(user2));
console.log(canSignUp(user3));

// 8. Function that takes username and password. If either one is empty, return "Invalid input" using the || operator.
function validateInput(username, password) {
  if (username === '' || password === '') {
    return 'Invalid input';
  } else {
    return 'Valid credentials';
  }
}
// Call validateInput function with different arguments and log the output
console.log(validateInput('user123', 'pass456'));
console.log(validateInput('', 'password123'));
console.log(validateInput('username', ''));
console.log(validateInput('', ''));

// 9. Function that accepts hours worked. If hours ≥ 40, return "Full-time", else "Part-time" using a ternary operator.
function staffType(hours) {
  return hours >= 40 ? 'Full-time' : 'Part-time';
}

// 10. Arrow function that takes two numbers and returns the larger one.
const getLarger = (a, b) => (a > b ? a : b);
// Call getLarger function with different arguments and log the output
console.log(getLarger(5, 8));
console.log(getLarger(10, 3));
console.log(getLarger(-1, -5));
