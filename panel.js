function changeView(element) {
  const width = document.body.clientWidth;
  if (element.id === "gallery") {
    const images = document.getElementsByClassName("cards_item");
    for (let image of images) {
      if (width < 640) {
        image.style.width = "75%";
      } else if (width >= 640 && width < 896) {
        image.style.width = "50%";
      } else if (width > 896) {
        image.style.width = "33.3333%";
      }
    }
  } else if (element.id === "list") {
    const images = document.getElementsByClassName("cards_item");
    for (let image of images) {
      image.style.width = "75%";
    }
  }
}
