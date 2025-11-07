const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");

// Toggle dropdown on click (mobile)
dropbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (window.matchMedia("(hover: none)").matches) {
    dropdown.classList.toggle("active");
  }
});

// Close dropdown when clicking outside (mobile)
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// Sign Up button navigation
document.getElementById("signupBtn").addEventListener("click", function() {
  window.location.href = "signup.html";
});
