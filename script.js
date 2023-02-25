function myFunction(x) {
  var dots = document.getElementById("dots"+x);
  var moreText = document.getElementById("more"+x);
  var btnText = document.getElementById("myBtn"+x);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
