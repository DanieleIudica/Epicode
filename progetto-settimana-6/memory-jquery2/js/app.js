// array con le icone da inserire in struttura
let objects = [
    "blind",
    "blind",
    "binoculars",
    "binoculars",
    "question-circle",
    "question-circle",
    "anchor",
    "anchor",
    "graduation-cap",
    "graduation-cap",
    "bolt",
    "bolt",
    "bomb",
    "bomb",
    "diamond",
    "diamond",
  ],
  // selettori utili
  $container = $(".container"),
  $scorePanel = $(".score-panel"),
  $rating = $(".fa-star"),
  $moves = $(".moves"),
  $timer = $(".timer"),
  $restart = $(".restart"),
  $deck = $(".deck"),
  // variabili
  nowTime,
  allOpen = [],
  match = 0,
  second = 0,
  moves = 0,
  wait = 420,
  totalCard = objects.length / 2;
// assegnazione punteggio in base al numero di mosse
(stars3 = 14), (stars2 = 16), (star1 = 20);

// funzione che mischia le carte
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// funzione che inizializza il gioco
function init() {
  // mischia l'array object
  let allCards = shuffle(objects);
  $deck.empty();

  // il gioco inizia con mosse e matches a 0
  match = 0;
  moves = 0;
  $moves.text("0");

  // un ciclo for che crea la struttura con all'interno le 16 carte
  for (let i = 0; i < allCards.length; i++) {
    $deck.append($('<li class="card"><i class="fa fa-' + allCards[i] + '"></i></li>'));
  }
  addCardListener();

  // resetta il timer al ricominciare del gioco
  resetTimer(nowTime);
  second = 0;
  $timer.text(`${second}`);
  initTime();
}

// assegna un punteggio in base al numero di mosse
function rating(moves) {
  let rating = 3;
  if (moves > stars3 && moves < stars2) {
    $rating.eq(3).removeClass("fa-star").addClass("fa-star-o");
  } else if (moves > stars2 && moves < star1) {
    $rating.eq(2).removeClass("fa-star").addClass("fa-star-o");
  } else if (moves > star1) {
    $rating.eq(1).removeClass("fa-star").addClass("fa-star-o");
    rating = 1;
  }
  return { score: rating };
}

// modale di bootstrap che compare alla vittoria in cui viene segnato tempo, numero di mosse e punteggio
function gameOver(moves, score) {
  $("#winnerText").text(`In ${second} secondi, con un totale di ${moves} mosse e un punteggio di ${score}!`);
  $("#winnerModal").modal("toggle");
}

// funzione che permette di ricominciare ili gioco
$restart.bind("click", function (confirmed) {
  if (confirmed) {
    init();
  }
});

// funzione che permette la comparazione delle carte
// se le due carte coparate non sono = tornano entrambe coperte
let addCardListener = function () {
  // funzione che permette di girare la carta cliccata
  $deck.find(".card").bind("click", function () {
    let $this = $(this);

    if ($this.hasClass("show") || $this.hasClass("match")) {
      return true;
    }

    let card = $this.context.innerHTML;
    $this.addClass("open show");
    allOpen.push(card);

    // comparazione carte
    if (allOpen.length > 1) {
      if (card === allOpen[0]) {
        $deck.find(".open").addClass("match");
        setTimeout(function () {
          $deck.find("open").removeClass("open show");
        }, wait);
        match++;

        // se le carte non sono uguali c'e un ritardo di 630ms, e le carte verranno nuovamente girate
      } else {
        $deck.find(".open").addClass("notmatch");
        setTimeout(function () {
          $deck.find(".open").removeClass("open show");
        }, wait / 1.5);
      }

      // array in cui vengono inserite le carte matchate
      allOpen = [];

      //   incrementa il numero di mosse di 1 quando 2 carte sono state cliccate
      moves++;

      //   il numero di mosse eseguite viene inserito nel rating() function che determinera il punteggio
      rating(moves);

      //   il numero di mosse viene aggiunto al modale html
      $moves.html(moves);
    }

    // il gioco finisce quando il numero di match corrisponde al numero di carte totali, con mezzo secondo di delay
    if (totalCard === match) {
      rating(moves);
      let score = rating(moves).score;
      setTimeout(function () {
        gameOver(moves, score);
      }, 500);
    }
  });
};

// inizializza il timer appena carica la pagina
function initTime() {
  nowTime = setInterval(function () {
    $timer.text(`${second}`);
    second = second + 1;
  }, 1000);
}

// resette il timer quando il gioco finisce o viene ricominciato
function resetTimer(timer) {
  if (timer) {
    clearInterval(timer);
  }
}

init();
