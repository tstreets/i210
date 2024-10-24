function isStrongPassword(password) {
  // TODO: Write your solution here

  // Too short < 8
  if (password.length < 8) {
    return false;
  }

  // Contains password
  if (password.includes("password")) {
    return false;
  }

  // No uppercase
  if (password.toLowerCase() === password) {
    return false;
  }

  //   Otherwise send back true
  return true;
}

console.log("Testing isStrongPassword()...");

console.log("Qwerty - " + isStrongPassword("Qwerty")); // false - Too short
console.log("passwordQwerty - " + isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log("qwerty123 - " + isStrongPassword("qwerty123")); // false - No uppercase chars
console.log("Qwerty123 - " + isStrongPassword("Qwerty123")); // true

// Do NOT remove the following line:
export default isStrongPassword;
