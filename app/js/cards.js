function changeView(element) {
  const width = window.innerWidth;
  if (element.id === "gallery") {
    const images = document.getElementsByClassName("cards_item");
    const cards = document.getElementsByClassName("cards");
    cards[0].style.flexDirection = "row";

    for (let image of images) {
      if (width < 540) {
        image.style.width = "100%";
      } else if (width >= 540 && width < 896) {
        image.style.width = "50%";
      } else if (width >= 896) {
        image.style.width = "33.3333%";
      }
    }
  } else if (element.id === "list") {
    const images = document.getElementsByClassName("cards_item");
    const cards = document.getElementsByClassName("cards");
    cards[0].style.flexDirection = "column";

    for (let image of images) {
      // image.style.width = "100%";
      if (width < 540) {
        image.style.width = "100%";
      } else if (width >= 540) {
        image.style.width = "500px";
      }
    }
  }
}
