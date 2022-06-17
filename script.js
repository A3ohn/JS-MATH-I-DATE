var date = document.getElementById("date");
var math = document.getElementById("math");


// Math

// var liczba = prompt("Podaj liczbę:", "0");
var liczba = 3;
math.innerHTML += "Liczba: " + liczba + "<br>";
math.innerHTML += "Abs: " + Math.abs(liczba) + "<br>"; 
math.innerHTML += "Round: " + Math.round(liczba) + "<br>";
math.innerHTML += "Ceil: " + Math.ceil(liczba) + "<br>";
math.innerHTML += "Floor: " + Math.floor(liczba) + "<br>";
math.innerHTML += "Power: " + Math.pow(liczba , 3) + "<br>";
math.innerHTML += "Sqrt: " + Math.sqrt(liczba) + "<br>";
math.innerHTML += "Pi: " + (Math.round(Math.PI * 100) / 100) + "<br>";
math.innerHTML += "Random: " + (Math.floor(Math.random() * 10) + 1) + "<br>";


date.innerHTML += "Current: " + Date() + "<br>";
var date1 = new Date(); 
date.innerHTML += "Date 1:" + date1 + "<br>";

var date2 = new Date(1998, 2, 22, 1, 2, 3, );
date.innerHTML += "Date 2: " + date2.getDate() + "." + (date2.getMonth() +1) + "." + date2.getFullYear() + "<br>";

setInterval(setTime, 1000)

function setTime()
{
    var time = new Date();
    date.innerHTML = "Czas: " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
}