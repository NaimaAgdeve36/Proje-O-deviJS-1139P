let counterReal = 0
let counterBarca = 0

//Barca function
function decreaseBarca() {
  
    if(counterBarca>0){
        counterBarca--;
        document.getElementById("BarcaScore").innerHTML = counterBarca;
    }
    else {
          alert("skor sıfırdan küçük olamaz");

    }
}


function countBarca() {
    counterBarca++;
    document.getElementById("BarcaScore").innerHTML = counterBarca;
}

//Real function

function decreaseReal() {
  
    if(counterReal>0){
        counterReal--;
        document.getElementById("RealScore").innerHTML = counterReal;
    }
    else {
          alert("skor sıfırdan küçük olamaz");

    }
}

function countReal() {
    counterReal++;
    document.getElementById("RealScore").innerHTML = counterReal;
}

//Reset function

function resetPrintBarca(){
    counterBarca = 0;
    document.getElementById("BarcaScore").innerHTML = counterBarca;
}


function resetPrintReal(){
    counterReal = 0;
    document.getElementById("RealScore").innerHTML = counterReal;
}

function team2Print(){

    let promptScoreEdit2 = prompt("skoru değiştir");
    counterReal = promptScoreEdit2
    document.getElementById("RealScore").innerText=counterReal;
}

function team1Print(){

    let promptScoreEdit1= prompt("skoru değiştir");
    counterBarca=promptScoreEdit1
    document.getElementById("BarcaScore").innerText=counterBarca;
}







