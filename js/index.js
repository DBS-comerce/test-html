function changeTab(index) {
  const elements = document.getElementById("content-render").children;

  const elementChildrenArray = Array.from(elements);
  elementChildrenArray.forEach(function (element, i) {
    if (i === index) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
}

window.onload = function () {
  changeTab(0);
};
