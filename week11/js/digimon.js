async function getDigimon() {
  const digiResponse = await fetch(
    `https://digimon-api.vercel.app/api/digimon`
  );
  const digiData = await digiResponse.json();

  return digiData;
}
