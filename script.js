const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");
btnEl.addEventListener("click", async function () {
  try {
    btnEl.disabled = true;
    animeImgEl.src = "spin.svg";
    animeNameEl.innerText = "Updating...";

    const response = await fetch("https://nekos.best/api/v2/neko");
    const data = await response.json();

    animeImgEl.src = data.results[0].url;
    animeNameEl.innerText = data.results[0].artist || "Unknown Artist";

    animeContainerEl.style.display = "block";
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
  } catch (error) {
    console.log(error);
    btnEl.disabled = false;
    btnEl.innerText = "Get Anime";
    animeNameEl.innerText = "Error...";
  }
});
