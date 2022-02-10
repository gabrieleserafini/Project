
// Crea un nuovo elemento lista al click del bottone Aggiungi
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("toDo").value;
  var myUL = document.getElementById("myUL")
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  document.getElementById("myUL").appendChild(li);
  document.getElementById("toDo").value = "";
  localStorage.setItem("dafare:", inputValue);
  
  

  li.className = "list-group-item justify-content-between align-items-center";
  
  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  button.className = "close btn btn-danger rounded-pill p-1";
  button.appendChild(txt);
  li.appendChild(button);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// Crea un bottone x ad ogni li della lista
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click per cancellare il valore registrato
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}