"use strict";

let images;
let categories = [];
let lastIndex = 0;
let pageSize = 5;
let imagesPerPage = pageSize;
let displayedImages = 0;
let totalImages = 0;

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
      applyStyles();
    });
}

function createAllCards() {
  categories = [-1];
  lastIndex = 0;
  imagesPerPage = pageSize;
  displayedImages = 0;
  removeChilds("cards_div");
  const cards_div = document.getElementById("cards_div");

  displayedImages = 0;
  totalImages = images.length;

  let cards_item;
  while (displayedImages < imagesPerPage) {
    const image = images[displayedImages];
    cards_item = createCardItem(image);

    cards_div.appendChild(cards_item);

    displayedImages += 1;
  }
  lastIndex = displayedImages;
  updateShowMoreButton();
}

function createCustomCards(category) {
  categories = [category];
  lastIndex = 0;
  imagesPerPage = pageSize;
  displayedImages = 0;
  totalImages = 0;

  removeChilds("cards_div");
  const cards_div = document.getElementById("cards_div");

  // count the max images per category
  for (const image of images) {
    if (image.category === category) {
      totalImages += 1;
    }
  }

  // create images and update pagination
  let i = 0;
  while (displayedImages < imagesPerPage && i < images.length) {
    const image = images[i];

    if (image.category === category) {
      const cards_item = createCardItem(image);
      cards_div.appendChild(cards_item);
      displayedImages += 1;
    }
    i += 1;
  }

  lastIndex = i;
  updateShowMoreButton();
}

function searchbarHandler(element) {
  categories = [];
  lastIndex = 0;
  imagesPerPage = pageSize;
  displayedImages = 0;
  totalImages = 0;
  removeChilds("cards_div");

  const value = element.value ? element.value.toLowerCase() : null;
  const cards_div = document.getElementById("cards_div");

  // count the max images per categories
  for (const image of images) {
    if (
      image.title.toLowerCase().includes(value) ||
      image.description.toLowerCase().includes(value) ||
      image.category.toLowerCase().includes(value) ||
      value === null ||
      value === undefined ||
      value === ""
    ) {
      totalImages += 1;
    }
  }

  // create images
  let i = 0;
  while (displayedImages < imagesPerPage && i < images.length) {
    const image = images[i];
    if (
      image.title.toLowerCase().includes(value) ||
      image.description.toLowerCase().includes(value) ||
      image.category.toLowerCase().includes(value) ||
      value === null ||
      value === undefined ||
      value === ""
    ) {
      const cards_item = createCardItem(image);
      cards_div.appendChild(cards_item);
      displayedImages += 1;
    }

    i += 1;
  }

  lastIndex = i;
  updateShowMoreButton();
}

function displayMoreImages() {
  let i = lastIndex;
  imagesPerPage += pageSize;

  const element = document.getElementById("searchbar");
  const value = element.value ? element.value.toLowerCase() : null;

  while (displayedImages < imagesPerPage && i < images.length) {
    const image = images[i];

    // Display all
    if (categories.length === 1 && categories[0] === -1) {
      const cards_item = createCardItem(image);
      cards_div.appendChild(cards_item);
      displayedImages += 1;
    }
    // Display only if matches specific category
    else if (categories.length === 1 && categories[0] !== -1) {
      if (image.category === categories[0]) {
        const cards_item = createCardItem(image);
        cards_div.appendChild(cards_item);
        displayedImages += 1;
      }
    }
    // Display if matches any category
    else if (categories.length === 0) {
      if (
        image.title.toLowerCase().includes(value) ||
        image.description.toLowerCase().includes(value) ||
        image.category.toLowerCase().includes(value) ||
        value === null ||
        value === undefined ||
        value === ""
      ) {
        const cards_item = createCardItem(image);
        cards_div.appendChild(cards_item);
        displayedImages += 1;
      }
    }

    i += 1;
  }
  lastIndex = i;
  updateShowMoreButton();
}

function updateShowMoreButton() {
  // console.log("displayed images: " + displayedImages);
  // console.log("total images: " + totalImages);

  if (displayedImages < totalImages) {
    document.getElementById("showMore").style.display = "flex";
  } else {
    document.getElementById("showMore").style.display = "none";
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

function applyStyles() {
  const cards_div = document.getElementById("cards_div");
  if (cards_div) {
    let i = 1;
    const firstChild = cards_div.children[0];
    setTimeout(() => {
      while (i < cards_div.children.length) {
        const child = cards_div.children[i];
        child.style.width = firstChild.clientWidth + "px";
        child.style.height = firstChild.clientHeight + "px";
        i += 1;
      }
    }, 1000);
  }
}

function createCardItem(image) {
  const cards_item = document.createElement("li");
  cards_item.className = "cards_item";

  const card = createCard(image);
  cards_item.appendChild(card);

  const cards_div = document.getElementById("cards_div");
  const firstChild = cards_div.children[0];
  if (firstChild) {
    setTimeout(() => {
      cards_item.style.width = firstChild.clientWidth + "px";
      cards_item.style.height = firstChild.clientHeight + "px";
    }, 10);
  }

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
