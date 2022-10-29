
var sanger = [];
for (var q = 0; q < array2019.length; q++) {
        sanger.push(array2019[q]);
}


var number = Math.floor(Math.random()*array2019.length);
var text = document.querySelector("#text");
var kort = document.querySelector("#container");
var knapp = document.querySelector("#neste");

kort.addEventListener("click", snu);
knapp.addEventListener("click", nyLapp);

text.innerHTML = sanger[number].linje1;



function nyLapp() {
  if (sanger.length <= 1) {
    text.innerHTML = "Ingen flere sanger, gå til setup";
    sanger.splice(number, 1);
    kort.removeEventListener("click", snu);
    knapp.removeEventListener("click", nyLapp);

  }else {
  sanger.splice(number, 1);
  number = Math.floor(Math.random()*sanger.length);
  text.innerHTML = sanger[number].linje1;

  }
}

function snu() {
  if (text.innerHTML == sanger[number].linje1 ) {
    text.innerHTML = sanger[number].linje1;
    text.innerHTML += "<br>";
    text.innerHTML += sanger[number].linje2;
    text.innerHTML += "<br><br><br>";
    text.innerHTML += sanger[number].sang;
    text.innerHTML += "<br>";
    text.innerHTML += sanger[number].artist;
  }else {
    text.innerHTML = sanger[number].linje1;
  }
}



//Setup boks

var setupEl = document.querySelector("#setup");
var showSetupBtn = document.querySelector("#showSetupBtn");
var setupAlt = document.querySelector("#setupAlt")
showSetupBtn.addEventListener("click", showSetup);

var kryssEl = document.querySelector("#kryss");
kryssEl.addEventListener("click", lukk);

var checkAll = document.querySelector("#checkAll") ;
checkAll.addEventListener("click", check);

function check(){
  var x = document.querySelectorAll(".setupCheck");
  if(checkAll.innerHTML=="Alle"){
    for (var m = 0; m < x.length; m++) {
      x[m].checked = true;
    }
    checkAll.innerHTML="Ingen";
  }else {
    for (var m = 0; m < x.length; m++) {
      x[m].checked = false;
    }
    checkAll.innerHTML="Alle";
    }
}


function showSetup() {
  setupAlt.innerHTML = "";
  setupEl.style.display = "block";
  showSetupBtn.style.display = "none";

  for (var k = 0; k < arrayer.length; k++) {
    setupAlt.innerHTML += "<input type= 'checkbox' name='setupCheck' id='array"+arrayer[k].arstall +"' class='setupCheck'>" + arrayer[k].arstall + "</input><br>";
  }
  setupAlt.innerHTML += "<input type='button' id='StartGame' value='Start'>";
  var startBtn = document.querySelector("#StartGame") ;
  startBtn.addEventListener("click", start);
}



function start() {
  var alternativer = document.querySelectorAll("input");
  sanger = [];
  for (var i = 0; i < alternativer.length; i++) {
    if (alternativer[i].checked) {
        for (var j = 0; j < arrayer[i].liste.length; j++) {
          sanger.push(arrayer[i].liste[j]);
        }
    }
  }

  if (sanger.length ==0) {
    alert("Du må velge minst et årstall!")
  }else {

    lukk();
    text.innerHTML = sanger[number].linje1;
    kort.addEventListener("click", snu);
    knapp.addEventListener("click", nyLapp);
  }
}



function lukk() {
  setupEl.style.display = "none";
  showSetupBtn.style.display = "block";
}
