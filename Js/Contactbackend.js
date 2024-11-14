//Footer Year 
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.textContent = d.getFullYear();
console.log(d.toLocaleString());