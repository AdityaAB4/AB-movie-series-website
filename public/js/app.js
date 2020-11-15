console.log("Client side Javascript file is loaded.");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");
const messageFour = document.querySelector("#message-4");
const messageFive = document.querySelector("#message-5");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  messageThree.textContent = "";
  messageFour.textContent = "";
  messageFive.textContent = "";

  fetch("http://localhost/home?name=" + name).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
      } else {
        messageOne.textContent = data.title;
        messageTwo.textContent = data.Year;
        messageThree.textContent = data.imdbID;
        messageFour.textContent = data.Type;
        messageFive.textContent =   data.Poster ;
      
      }
    });
  });
});
