let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.opacity = 1;
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function opentab(tabName) {
  // Hide all elements with class="tab-contents" by default
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-contents");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the class "active-link" from all elements
  tablinks = document.getElementsByClassName("tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-link", "");
  }

  // Show the specific tab content and add an "active-link" class to the clicked tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active-link";
}

function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px"; // Assuming -200px is the initial position of the sidemenu.
}
