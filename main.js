const API_URL = "https://api.adviceslip.com/advice";
function get(url) {
  return fetch(url).then((resp) => resp.json());
}
const API = { get };

const quoteP = document.querySelector(".card__quote");
const idNumber = document.querySelector(".id");
function getQuotes() {
  API.get(API_URL).then((data) =>
    addQuote(data["slip"]["advice"], data["slip"]["id"]),
  );
}

function addQuote(quote, id) {
  quoteP.innerText = quote;
  idNumber.innerText = id;
}

const reloadButton = document.querySelector(".card__btn");
reloadButton.addEventListener("click", () => getQuotes());

document.body.onload = getQuotes;
