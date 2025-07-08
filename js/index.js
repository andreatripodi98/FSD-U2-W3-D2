document
  .getElementById("delete-button")
  .addEventListener("submit", function (e) {
    e.preventDefault();
  });

document.getElementById("save-button").addEventListener("click", function () {
  const nome = document.getElementById("name-input").value;
  localStorage.setItem("username", nome);
  document.getElementById("saved-name").innerHTML = `${nome}`;
});

document.getElementById("delete-button").addEventListener("click", function () {
  localStorage.removeItem("username");
  document.getElementById("saved-name").innerHTML = "";
});

const savedName = localStorage.getItem("username");
if (savedName) {
  document.getElementById("saved-name").innerHTML = `${savedName}`;
}

let secondi = Number(sessionStorage.getItem("secondi"));

if (!secondi) {
  secondi = 0;
  sessionStorage.setItem("secondi", secondi);
}

document.getElementById("timer").textContent = secondi;

setInterval(() => {
  secondi++;
  sessionStorage.setItem("secondi", secondi);
  document.getElementById("timer").textContent = secondi;
}, 1000);
