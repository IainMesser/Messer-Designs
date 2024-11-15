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





//Greatings deepending on the time
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    const d = new Date();
    const hour = d.getHours();
    let message = "";
    if (hour < 12) {
        message = "Good morning!";
    } else if (hour < 18) {
        message = "Good afternoon!";
    } else {
        message = "Good evening!";
    }

    // Create a div for the message
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("popup-message"); 
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.classList.add("fade-out");
        setTimeout(() => {
            messageDiv.remove(); 
        }, 500); 
    }, 3000); 
});





//Footer Year 
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d.toLocaleString());
