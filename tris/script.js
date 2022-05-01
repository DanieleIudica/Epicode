// seleziono gli elementi del dom
const turno = document.querySelector(".status");
const ricomincia = document.querySelector(".reset");
const cellDivs = document.querySelectorAll(".game-cell");
const modal = document.querySelector(".modal");
const modalMessage = document.querySelector(".modalMessage");
const modalRicomincia = document.querySelector(".modalReset");

// variabili
let gameIsLive = true;
let xIsNext = true;
let vincitore = null;
let xVince = `CONGRATULAZIONI GIOCATORE <i class="bi bi-x-lg"></i><br /> SEI IL VINCITORE!!!`;
let oVince = `CONGRATULAZIONI GIOCATORE <i class="bi bi-circle"></i><br /> SEI IL VINCITORE!!!`;
// funz ricomincia
const FuncRicomincia = () => {
  for (const cellDiv of cellDivs) {
    cellDiv.innerHTML = "";
    turno.innerHTML = `<i class="bi bi-x-lg"></i> é il prossimo`;
    cellDiv.classList.remove("disabled", "x", "o");
    modal.classList.remove("mostra");
    xIsNext = true;
    console.log(xIsNext);
  }
};
// funzione mossa
const mossa = (e) => {
  if (xIsNext) {
    e.target.innerHTML = `<i class="bi bi-x-lg"></i>`;
    e.target.classList.add("disabled", "x");
    turno.innerHTML = `<i class="bi bi-circle"></i> é il prossimo`;
    controllo();
    xIsNext = false;
  } else if (!xIsNext) {
    e.target.innerHTML = `<i class="bi bi-circle"></i>`;
    e.target.classList.add("disabled", "o");
    turno.innerHTML = `<i class="bi bi-x-lg"></i> é il prossimo`;
    controllo();
    xIsNext = true;
  }
};

// funzione controlla gioco
const controllo = () => {
  const a = cellDivs[0].classList[2];
  const b = cellDivs[1].classList[2];
  const c = cellDivs[2].classList[2];
  //
  const d = cellDivs[3].classList[2];
  const e = cellDivs[4].classList[2];
  const f = cellDivs[5].classList[2];
  //
  const g = cellDivs[6].classList[2];
  const h = cellDivs[7].classList[2];
  const i = cellDivs[8].classList[2];

  // check vittoria
  if (a && a == e && a == i) {
    gameIsLive = false;
    vincitore = a;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (a && a == b && a == c) {
    gameIsLive = false;
    vincitore = a;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (a && a == d && a == g) {
    gameIsLive = false;
    vincitore = a;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (b && b == e && b == h) {
    gameIsLive = false;
    vincitore = b;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (c && c == f && c == i) {
    gameIsLive = false;
    vincitore = c;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (d && d == e && d == f) {
    gameIsLive = false;
    vincitore = d;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (g && g == h && g == i) {
    gameIsLive = false;
    vincitore = g;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (g && g == e && g == c) {
    gameIsLive = false;
    vincitore = g;
    if (vincitore == "x") {
      turno.innerHTML = `<i class="bi bi-x-lg"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = xVince;
    }
    if (vincitore == "o") {
      turno.innerHTML = `<i class="bi bi-circle"></i> ha vinto!`;
      apriModal();
      modalMessage.innerHTML = oVince;
    }
  } else if (a && b && c && d && e && f && g && h && i) {
    turno.innerHTML = `Nessuno ha vinto!`;
    apriModal();
    modalMessage.innerHTML = `LA PARTITA E' FINITA IN PAREGGIO!`;
  }
};

// funzione apri modal
const apriModal = () => {
  modal.classList.add("mostra");
};

// event listeners

for (const cellDiv of cellDivs) {
  cellDiv.addEventListener("click", mossa);
}

ricomincia.addEventListener("click", FuncRicomincia);
modalRicomincia.addEventListener("click", FuncRicomincia);
