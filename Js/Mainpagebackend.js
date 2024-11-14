// Modal pop up with text
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

    window.addEventListener("load", function() {
      modal.style.display = "flex";
    });

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
