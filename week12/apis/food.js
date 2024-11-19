const foodListRef = document.querySelector("#foodList");

async function getRandomIdlyFood() {
  const idlyResponse = await fetch(`https://foodish-api.com/api/images/idly`);
  const idlyData = await idlyResponse.json();

  foodListRef.innerHTML = ` <img src="${idlyData.image}" height="200"/>`;
}

getRandomIdlyFood();
