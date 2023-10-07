let broj = 0;
localStorage.setItem("myKey", "testValue");

function Klik() {
  broj++;
  tekstPolje = document.getElementById("tekst");
  tekstPolje.innerHTML = broj;
}

function Resetuj() {
  tekstPolje = document.getElementById("tekst");
  tekstPolje.innerHTML = 0;
  broj = 0;
}
