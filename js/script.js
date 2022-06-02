// Ambil tombol
mybutton = document.getElementById("myBtn");

// ketika scroll bawah 100px tombol muncul
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//diklik ke atas top
function topFunction() {
  // safari
  document.body.scrollTop = 0;
  // chrome, firefox, ie, opera
  document.documentElement.scrollTop = 0;
}
