function generatePoem(event) {
  event.preventDefault();
  console.log()

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  new Typewriter(poemElement, {
    autoStart: true,
    delay: 10,
    cursor: "",
  })
    .typeString("bla bla bla bla")
    .start();
}

let poemformElement = document.querySelector("#poemForm");
poemformElement.addEventListener("submit", generatePoem);
