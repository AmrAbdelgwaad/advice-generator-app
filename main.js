const API_URL = "https://api.adviceslip.com/advice";

const getQuote = async () => {
  const {
    slip: { advice, id },
  } = await (await fetch(API_URL)).json();

  const quoteP = document.querySelector(".card__quote");
  const idNumber = document.querySelector(".id");

  quoteP.innerText = `"${advice}"`;
  idNumber.innerText = id;
};

document.addEventListener("DOMContentLoaded", getQuote);

const reloadButton = document.querySelector(".card__btn");
reloadButton.addEventListener("click", getQuote);
