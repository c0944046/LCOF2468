// Gloabal variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Hamburger munu function
function hamburger() {
  var menu = document.getElementById("menu-link");
  var icon = document.querySelector(".menu-icon");

  // Toggle the visibility of the menu
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

  // Ensure the hamburger icon remains visible
  icon.style.display = "block";
}

// Fucntion to display the burpees example video
function burpees() {
  videoSource.src = "media/burpees.mp4";
  descriptionSource.src = "media/burpees-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

// Function to display the plank example video
function plank() {
  videoSource.src = "media/plank.mp4";
  descriptionSource.src = "media/plank-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

// Function to display the mountain climbers example video
function mountain() {
  videoSource.src = "media/mc.mp4";
  descriptionSource.src = "media/mountain-descriptions.vtt";
  video.style.display = "block";
  video.load();
}

// Function to display a promo code
function discount() {
  var promo = document.getElementById("special");
  promo.firstChild.nodeValue = "Promo Code: D25START";
  promo.style.fontSize = "2em";
}
