"use strict";

let images;
loadAllImages();

function loadAllImages() {
  const path = "./assets/data/sneak.json";
  fetch(path)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      images = data;
      createAllCards();
      // createCustomCards("Branding");
    });
}

function createAllCards() {
  removeChilds("cards_div");
  const cards_div = document.getElementById("cards_div");

  for (const image of images) {
    const cards_item = createCardItem(image);
    cards_div.appendChild(cards_item);
  }
}

function createCustomCards(category) {
  removeChilds("cards_div");
  const cards_div = document.getElementById("cards_div");

  for (const image of images) {
    if (image.category === category) {
      const cards_item = createCardItem(image);
      cards_div.appendChild(cards_item);
    }
  }
}

function removeChilds(tag) {
  const cards_div = document.getElementById(tag);
  if (cards_div) {
    let child = cards_div.lastElementChild;
    while (child) {
      cards_div.removeChild(child);
      child = cards_div.lastElementChild;
    }
  }
}

function createCardItem(image) {
  const cards_item = document.createElement("li");
  cards_item.className = "cards_item";

  const card = createCard(image);
  cards_item.appendChild(card);

  return cards_item;
}

function createCard(image) {
  const card = document.createElement("div");
  card.className = "card";

  const card_image = createCardImage(image);
  const card_content = createCardContent(image);

  card.appendChild(card_image);
  card.appendChild(card_content);

  return card;
}

function createCardImage(image) {
  const card_image = document.createElement("div");
  card_image.className = "card_image";

  const img = new Image();
  img.src = image.url;
  card_image.appendChild(img);

  return card_image;
}

function createCardContent(image) {
  const card_content = document.createElement("div");
  card_content.className = "card_content";

  const title = document.createElement("h2");
  const titleText = document.createTextNode(image.title);
  title.className = "card_title";
  title.appendChild(titleText);

  const description = document.createElement("p");
  const descriptionText = document.createTextNode(image.description);
  description.className = "card_text";
  description.appendChild(descriptionText);

  const button = document.createElement("button");
  const buttonText = document.createTextNode("Read More");
  button.className = "btn card_btn";
  button.appendChild(buttonText);

  card_content.appendChild(title);
  card_content.appendChild(description);
  card_content.appendChild(button);

  return card_content;
}
