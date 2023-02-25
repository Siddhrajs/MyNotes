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

function myInitialise() {
  var btns =  document.getElementsByClassName('c-btn');;
//  console.log(btns);
//  btns.forEach(myFunction);
  for (let i = 1; i <= btns.length; i++) {
    var dots = document.getElementById("dots"+i);
    var moreText = document.getElementById("more"+i);
    var btnText = document.getElementById("myBtn"+i);
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}
