function drawTriangle(triangleSize) {
  // TODO: Add your solution here
  for (let i = 0; i < triangleSize; i++) {
    let stars = "";

    for (let j = 0; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

function drawOtherTriangle(triangleSize) {
  for (let i = 0; i < triangleSize; i++) {
    let stars = "";

    for (let j = 0; j <= i; j++) {
      stars += "*";
    }

    console.log(stars);
  }
}

console.log("Testing drawTriangle()...");

// TODO: Test drawTriangle() with different arguments
drawTriangle(4);
drawTriangle(2);
drawTriangle(7);

// Do NOT remove the following line
export default drawTriangle;
