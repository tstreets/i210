function sortEvens(numArray) {
  // TODO: Write your solution here
  let evenNumbersToReturn = [];

  //   Logic
  for (let i = 0; i < numArray.length; i++) {
    const num = numArray[i];
    // modulus (%) sends back the remainder of dividing the numbers
    if (num % 2 === 0) {
      evenNumbersToReturn.push(num);
    }
  }
  evenNumbersToReturn.sort(function (a, b) {
    return a - b;
  });

  return evenNumbersToReturn;
}

function sortEvenAges(peepsArray) {
  const peepsToReturn = [];

  // Logic
  for (let i = 0; i < peepsArray.length; i++) {
    const littleBoPeep = peepsArray[i];
    if (littleBoPeep.age % 2 === 0) {
      peepsToReturn.push(littleBoPeep);
    }
  }

  peepsToReturn.sort(function (a, b) {
    return b.age - a.age;
  });

  return peepsToReturn;
}

console.log("Testing sortEvens()...");
// let nums = [4, 2, 9, 1, 8];
// let evenNums = sortEvens(nums);
let nums = [{ age: 4 }, { age: 2 }, { age: 9 }, { age: 1 }, { age: 8 }];
let evenNums = sortEvenAges(nums);
console.log(evenNums);

// Do NOT remove the following line:
export default sortEvens;
