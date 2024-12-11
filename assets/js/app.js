cl = console.log;

const options = document.getElementById("options");

const allPlayers = [...document.querySelectorAll(".all")];

onColorChange = (eve) => {
  let SelectedClassName = eve.target.value;

  allPlayers.forEach((player) => {
    player.classList.add("d-none");
  });

  let selectedPlayers = [...document.querySelectorAll("." + SelectedClassName)];

  selectedPlayers.forEach((player) => {
    player.classList.remove("d-none");
  });
};

options.addEventListener("change", onColorChange);
