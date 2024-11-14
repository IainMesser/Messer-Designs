// Modal pop up with text
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

// Check if the modal has already been shown
if (!localStorage.getItem("modalShown")) {
    window.addEventListener("load", function() {
      modal.style.display = "flex";
    });
    localStorage.setItem("modalShown", "true");
  }

closeModal.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}





//Footer Year 
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d.toLocaleString());
