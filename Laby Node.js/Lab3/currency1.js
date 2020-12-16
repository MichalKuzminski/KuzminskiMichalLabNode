let canadianDollar = 0.91;
let frank = 4.11;
let funt = 4.90;
function roundTwoDecimals(amount) {
return Math.round(amount * 100) / 100;
}
exports.canadianToUS = function(canadian) {
return roundTwoDecimals(canadian * canadianDollar);
}
exports.USToCanadian = function(us) { 
return roundTwoDecimals(us / canadianDollar);
}
exports.frankToPln = function(fr) {
return roundTwoDecimals(fr * frank);
}
exports.plnToFrank = function(pln_fr) {
return roundTwoDecimals(pln_fr / frank);
}
exports.funtToPln = function(gbp) {
return roundTwoDecimals(gbp * funt);
}
exports.plnToFunt = function(pln_gbp) {
return roundTwoDecimals(pln_gbp / funt);
}