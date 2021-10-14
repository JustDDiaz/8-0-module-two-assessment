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

document.querySelector("#drop-down").addEventListener("change", (event) => {
  fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) => response.json())
    .then((moves) => {
      moves.forEach((move) => {
        if (event.target.value === move.title.value) {
          const drop = document.querySelector("drop-down");
          const name = move.title.value;
          const year = move.relase_fate.value;
          const info = move.discription.value;
          const h2 = document.createElement("h2");
          const p1 = document.createElement("p1");
          const p2 = document.createElement("p2");
          drop.append(h2);
          drop.append(p1);
          drop.append(p2);
          h2.textContent = name;
          p1.textContent = year;
          p2.textContent = info;
          event.preventDefault();
        }
      });
    });
});

document.querySelector("#review form").addEventListener("submit", (event) => {
  event.preventDefault();
  const review = document.querySelector("#review");
  const text = document.querySelector("#review-text").value;
  const li = document.createElement("li");
  li.textContent = text;
  const ul = document.querySelector("ul");
  ul.append(li);
  console.log(text);
  event.preventDefault();
});
