let broj = 0;
function Klik() {
  broj++;
  tekstPolje = document.getElementById("tekst");
  console.log("Radi");
  tekstPolje.innerHTML = broj;
}
