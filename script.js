var math = document.getElementById("math");
var math = document.getElementById("date");


// Math

var liczba = prompt("Podaj liczbę:", "0");
math.innerHTML += "Liczba: " + liczba + "<br>";
math.innerHTML += "Abs: " + Math.abs(liczba) + "<br>"; 
math.innerHTML += "Round: " + Math.round(liczba) + "<br>";
math.innerHTML += "Ceil: " + Math.ceil(liczba) + "<br>";
math.innerHTML += "Floor: " + Math.floor(liczba) + "<br>";
math.innerHTML += "Power: " + Math.pow(liczba , 3) + "<br>";
math.innerHTML += "Sqrt: " + Math.sqrt(liczba) + "<br>";
math.innerHTML += "Pi: " + (Math.round(Math.PI * 100) / 100) + "<br>";
math.innerHTML += "Random: " + (Math.floor(Math.random() * 10) + 1) + "<br>";



