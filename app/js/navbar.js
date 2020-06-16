paddingBottom = 0;
checked = false;

function onClickNavButton() {
  checked = !checked;
  const nav = document.getElementById("nav-menu");
  const navLinks = document.getElementById("nav-links");

  if (checked) {
    // nav.style.paddingBottom = "calc(100vh - 50px)";
    nav.style.paddingBottom = "290px";
  } else if (!checked) {
    nav.style.paddingBottom = "0px";
  }
}
