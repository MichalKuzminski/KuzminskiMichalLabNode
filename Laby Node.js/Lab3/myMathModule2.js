let Oblicz = function(x,y) {
   this.x=x;
   this.y=y;
}
Oblicz.prototype.dzielenie = function(x,y) {
let iloraz;
iloraz = parseInt(x)/parseInt(y);
return iloraz;
}
Oblicz.prototype.potega = function(x,y) {
let wynik_potegi;
wynik_potegi= Math.pow(parseInt(x),parseInt(y));   
return wynik_potegi;
}
module.exports = exports = Oblicz;