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
btn.onmouseover = () => {
//Hover state 
  btn.textContent = "Press Me";
};
btn.onmouseout = () => {
  btn.textContent = "Why hello there!";
};
btn.addEventListener("click", () => {
    const d = new Date();
    const hour = d.getHours();
    let message = "";
    let timeClass = "";

    if (hour < 12) {
      message = "☀️ Good morning!";
      timeClass = "morning";
  } else if (hour < 18) {
      message = "🌞 Good afternoon!";
      timeClass = "afternoon";
  } else {
      message = "🌙 Good evening!";
      timeClass = "evening";
  }
  
    // Remove any existing message
    const existingMessage = document.querySelector(".popup-message");
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("popup-message", timeClass); 
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.classList.add("fade-out");
        setTimeout(() => {
            messageDiv.remove(); 
        }, 500); 
    }, 3000); 
});





//Ul list
const numbers = ["Typography Exploration", "Logo Design for XYZ", "Branding Concept", "Illustration Showcase", "Website Mockups", "Print Media Design", "Social Media Campaigns", "User Interface Design", "3D Modeling Basics", "Video Editing Projects", "Photo Manipulation Showcase", "Creative Concept Presentation"];

const numbersEL = document.getElementById("numbers");

numbers.forEach((item, index) => {
    const li = document.createElement("li");
    
    li.innerText = index % 2 === 0 ? "Even" : "Odd";

    numbersEL.appendChild(li);
});






//Footer Year 
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d.toLocaleString());
