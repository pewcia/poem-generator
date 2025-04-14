function displayPoem (response) {
let poemElement=document.querySelector("#poem");
new Typewriter(poemElement, {
    autoStart: true,
    delay: 10,
    cursor: "",
  })
    .typeString(response.data.answer)
    .start();

}



function generatePoem(event) {
  event.preventDefault();
  let apiKey = "bb203f4a92e7t89f33c44201bd2fbfoa";
  let prompt =
    "You are a poetic AI with a deep understanding of human emotions, beauty, and language.";
  let context =
    "Write a vivid, meaningful, and emotionally resonant poem filled with metaphors, imagery, and rhythm. The poem should touch the reader’s heart and feel as if it was written by a thoughtful, sensitive soul. Format this poem for HTML. Only add <br> tags between the lines. Do not change anything else, also don't add HTML at the begining.";
  let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiURL).then(displayPoem);
}
  

let poemformElement = document.querySelector("#poemForm");
poemformElement.addEventListener("submit", generatePoem);
