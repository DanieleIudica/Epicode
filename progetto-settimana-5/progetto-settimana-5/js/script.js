// Array icone
let arrayCarte = ["💩", "🤖", "👽", "👻", "💀", "👺", "👹", "🤡", "💎", "💣", "💊", "🤘", "💩", "🤖", "👽", "👻", "💀", "👺", "👹", "🤡", "💎", "💣", "💊", "🤘"];
// Array di confronto
var arrayComparison = [];

// Inizializza il gioco al caricarsi della pagina
document.body.onload = startGame();

// Variabili
var interval;
var iconsFind = document.getElementsByClassName("find");
var modal = document.getElementById("modal");
var timer = document.querySelector(".timer");

// Funzione shuffle per mischiare "arrayCarte"
function shuffle(a) {
  var currentIndex = a.length;
  var temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = a[currentIndex];
    a[currentIndex] = a[randomIndex];
    a[randomIndex] = temporaryValue;
  }
  return a;
}

// Funzione "gioca ancora"
function playAgain() {
  modal.classList.remove("active");
  startGame();
}

// Funzione di inizio gioco
function startGame() {
  // azzera il cronometro
  clearInterval(interval);

  // mischia le carte
  var arrayShuffle = shuffle(arrayCarte);

  // Creazione griglia
  // cicla la lista alla ricerca di child e li rimuove
  var lista = document.getElementById("griglia");
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }
  // crea 24 div per le carte
  for (var i = 0; i < 24; i++) {
    var box = document.createElement("div");
    var element = document.createElement("div");
    element.className = "icon";
    document.getElementById("griglia").appendChild(box).appendChild(element);
    element.innerHTML = arrayShuffle[i];
  }

  // fa partire cronometro
  startTimer();

  var icon = document.getElementsByClassName("icon");
  // crea una copia dell'array usando lo spread operator
  // possibile farlo anche in questo modo
  // var icons = Object.assign([], icon)
  var icons = [...icon];

  for (var i = 0; i < icons.length; i++) {
    icons[i].addEventListener("click", displayIcon);
    icons[i].addEventListener("click", openModal);
  }
}

// Funzione che verifica l'associazione delle carte all'interno dell'array di comparazione
function displayIcon() {
  var icon = document.getElementsByClassName("icon");
  var icons = [...icon];

  this.classList.toggle("show");
  arrayComparison.push(this);
  console.log(this);
  var len = arrayComparison.length;
  if (len === 2) {
    if (arrayComparison[0].innerHTML === arrayComparison[1].innerHTML) {
      arrayComparison[0].classList.add("find", "disabled");
      console.log(arrayComparison[0]);
      arrayComparison[1].classList.add("find", "disabled");
      arrayComparison = [];
    } else {
      icons.forEach(function (item) {
        item.classList.add("disabled");
      });
      setTimeout(function () {
        arrayComparison[0].classList.remove("show");
        arrayComparison[1].classList.remove("show");
        icons.forEach(function (item) {
          item.classList.remove("disabled");
          for (var i = 0; i < iconsFind.length; i++) {
            iconsFind[i].classList.add("disabled");
          }
        });
        arrayComparison = [];
      }, 700);
    }
  }
}

// Funzione apre il modale al momento della vittoria (quando l'array di comparazione risulta pieno)
function openModal() {
  if (iconsFind.length == 24) {
    // azzera il cronometro
    clearInterval(interval);
    // aggiunge classe active per mostrare il modale
    modal.classList.add("active");
    //modal.className.add("active"); NO!, mi sovrascriverebbe le altre classi
    // inserisce il tuo tempo dopo il messaggio di congratulazioni
    document.getElementById("tempoTrascorso").innerHTML = timer.innerHTML;
    closeModal();
  }
}
// chiusura modale
function closeModal() {
  closeicon.addEventListener("click", function (e) {
    // rimuovo la classe active
    modal.classList.remove("active");
    startGame();
  });
}

// Funzione Cronometro
function startTimer() {
  var s = 0;
  var m = 0;
  var h = 0;

  interval = setInterval(function () {
    timer.innerHTML = "Tempo: " + m + " min " + s + " sec";
    s++;
    if (s == 60) {
      m++;
      s = 0;
    }
    if (m == 60) {
      h++;
      m = 0;
    }
  }, 1000);
}
