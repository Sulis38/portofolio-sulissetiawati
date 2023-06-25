var asset5Image = document.getElementById("asset5Image");
if (asset5Image) {
  asset5Image.addEventListener("click", function () {
    var anchor = document.querySelector(
      "[data-scroll-to='copyright2023Sulissetiawati']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var asset6Image = document.getElementById("asset6Image");
if (asset6Image) {
  asset6Image.addEventListener("click", function (e) {
    window.location.href = "./my-project.html";
  });
}

var vector = document.getElementById("vector");
if (vector) {
  vector.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='aboutMeText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

