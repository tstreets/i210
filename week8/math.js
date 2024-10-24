function getCircleArea(radius) {
  //  If there's no radius
  //  don't do anything
  if (radius) {
    console.log(radius * radius * Math.PI);
  }
}

// Circle radius 2
getCircleArea(2);
// Circle radius 4
getCircleArea(4);
// Circle radius 8
getCircleArea(8);
// Circle radius 3
getCircleArea(3);
// No radius provided
getCircleArea();

function convertInchToFeet() {
  const inches = document.getElementById("inches").value;
  const calcFeet = inches / 12;
  const feetText = `Feet: ${calcFeet.toFixed(2)}`;
  document.getElementById("feet").innerHTML = feetText;
}
