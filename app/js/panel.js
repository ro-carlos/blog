"use strict";

loadAllImages();

function loadAllImages() {
  readTextFile();
}

function readTextFile() {
  fetch("./assets/data/sneak.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
