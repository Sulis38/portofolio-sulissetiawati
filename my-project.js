var asset72 = document.getElementById("asset72");
if (asset72) {
  asset72.addEventListener("click", function (e) {
    window.location.href = "./index.html";
  });
}

var asset12Image = document.getElementById("asset12Image");
if (asset12Image) {
  asset12Image.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='copyright2023Sulissetiawati']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var asset13Image = document.getElementById("asset13Image");
if (asset13Image) {
  asset13Image.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='designPosterText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var vector = document.getElementById("vector");
if (vector) {
  vector.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='myProjectText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}