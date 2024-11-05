async function getDigimon() {
  const digimonResponse = await fetch(
    `https://digimon-api.vercel.app/api/digimon`
  );
  const digimonData = await digimonResponse.json();

  const digimonTableRef = document.querySelector(".digimon-table");

  digimonTableRef.innerHTML = "";

  for (let i = 0; i < digimonData.length; i++) {
    const digimon = digimonData[i];
    digimonTableRef.innerHTML += `
        <tr>
            <td>${i}</td>
            <td>${digimon.name}</td>
            <td>
                <img src="${digimon.img}" height="50" />
            </td>
            <td>${digimon.level}</td>
        </tr>
        `;
  }
}
