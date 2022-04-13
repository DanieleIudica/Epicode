const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock"];
// Array di confronto
var arrayComparison = [];

$(() => {
  // ciclo for per riempire la struttura
  var arrayShuffle = shuffle(mieImg);
  function preparaSchema() {
    for (let i = 0; i < 16; i++) {
      let img = "<img id= '" + i + "' src='img/" + arrayShuffle[i] + ".png'/>"; // con id
      // let img = "<img ' src='/img/" + arrayShuffle[i] + ".png'/>"; // senza id
      $("#struttura").append('<div class="carta">' + img + "</div>");
    }
  }
  preparaSchema();
  startTimer();
  var contaClick = 1;

  //   funzione gira carta
  // $("img").addClass("nascondi");
  $("img").on("click", function () {
    //   conteggio click
    $("span").text(contaClick++);

    $(this).addClass("mostra");
    var conta = $("span").text();
    // se superi i 20 click, il contatore diventa rosso
    if (conta > 20) {
      $("span").css("background", "red");
    }
    var img = $(this).attr("src");

    var $this = this;
    console.log($this);

    // var id = $(this).attr("id");
    // console.log(id);

    // cartaDaComparare = $(this).parent().html();
    // console.log(cartaDaComparare);

    arrayComparison.push(img);
    console.log(arrayComparison);
    var lunghezza = arrayComparison.length;
    console.log(arrayComparison[0]);
    console.log(arrayComparison[1]);

    // funzione comparazione carte
    if (lunghezza == 2) {
      if (arrayComparison[0] === arrayComparison[1]) {
        $(this).addClass("disabled").addClass("find");

        //mi sono bloccato qui e non sono piu riuscito ad andare avanti
        //non riesco a dare una classe ai due elementi che matchano all'interno dell'arry di comparazione

        // arrayComparison[0].add("find", "disabled");
        // console.log(arrayComparison[0]);
        // arrayComparison[1].add("find", "disabled");
        // console.log(arrayComparison[1]);
        arrayComparison = [];
        console.log(arrayComparison);
      } else {
      }
    }
  });

  // Funzione Cronometro
  function startTimer() {
    var s = 0;
    var m = 0;

    interval = setInterval(function () {
      $(".cronometro").text("TEMPO: " + m + " min " + s + " sec");
      s++;
      if (s == 60) {
        m++;
        s = 0;
      }
      if (m == 60) {
        h++;
        m = 0;
      }
      if (s == 59) {
        $("#sconfitta").show();
      }
    }, 1000);
  }

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
  // progress bar

  $("#box").animate(
    {
      width: "80vw",
    },
    {
      duration: 58000,
      easing: "linear",
    }
  );
});
