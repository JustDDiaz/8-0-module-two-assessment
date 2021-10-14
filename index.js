const select = document.querySelector("#move-names");
fetch("https://ghibliapi.herokuapp.com/films/")
  .then((response) => response.json())
  .then((moves) => {
    moves.forEach((move) => {
      const option = document.createElement("option");
      option.value = move.title.value;
      option.textContent = move.title;
      select.append(option);
    });
  });
