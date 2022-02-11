var btn = document.getElementById("add");
btn.addEventListener("click", add);


function stampa() {
  ul.innerHTML = ''; 
  for (i = 0; i < arrayTask.length; i++) {
      ul.innerHTML += '<div class="row p-1"><li class="list-group-item col-11 fs-5">' + arrayTask[i] + 
      '</li><button  type="button" onclick="remove(' + i + ')" class="btnRemove btn btn-danger rounded-pill col-1" >x</button></div>';
  };
}

//creo Array
if (localStorage.getItem('toDo')) {
    //uso lo split per prelevare la striga da task eliminando la virgola e passando i valori all'array
    var arrayTask = localStorage.getItem('toDo').split(",");
} else {
  localStorage.setItem('toDo',"Studia");
  var arrayTask = localStorage.getItem('toDo').split(",");
}
stampa();

//Aggiungo elementi
function add() {
    var testo = document.getElementById("testo").value;
    var ul = document.getElementById("ul");

    if (testo != "") { 
        arrayTask.push(testo); // aggiungo all'array

        ul.innerHTML = ''; //svuoto la <ul>
        
        stampa();
        localStorage.setItem('toDo', arrayTask);//aggiorno
        
        document.getElementById("testo").value = "";//svuoto il campo input
    } 
}

//Elimino 
function remove(i) {
    arrayTask.splice(i, 1);
    ul.innerHTML = ''; //svuoto la <ul>
    stampa();
    localStorage.setItem('toDo', arrayTask);
}

