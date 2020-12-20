let Currency = require('./currency2');
let russianRubel = 0.05;
let euro = 4.45;
let currency = new Currency(russianRubel,euro);

console.log("\n======================Wymiana walut======================");
console.log("\n------------------Podejście obiektowe--------------------");
console.log("Rosyjskie ruble na złotówki: "+currency.rubToPln(100)+" PLN");
console.log("Złotówki na rosyjskie ruble: "+currency.plnToRub(100)+" RUB"+"\n");
console.log("Złotówki na euro: "+currency.plnToEur(100)+" EUR");
console.log("Euro na złotówki: "+currency.eurToPln(100)+" PLN"+"\n");

let currency_mod1 = require('./currency1');

console.log("\n------------------Podejście modułowe--------------------");
console.log("Dolar kanadyjski na Dolar USA: "+currency_mod1.canadianToUS(100)+" USD");
console.log("Dolar USA na Dolar kanadyjski: "+currency_mod1.USToCanadian(100)+" CAD"+"\n");
console.log("Złotówki na franki szwajcarskie: "+currency_mod1.plnToFrank(100)+" CHF");
console.log("Franki szwajcarskie na złotówki: "+currency_mod1.frankToPln(100)+" PLN"+"\n");
console.log("Złotówki na funty brytyjskie: "+currency_mod1.plnToFunt(100)+" GBP");
console.log("Funty brytyjskie na złotówki: "+currency_mod1.funtToPln(100)+" PLN"+"\n");

const math1 = require('./myMathModule1');

const MyMathModule = require('./myMathModule2');
let x;
let y;
let math2 = new MyMathModule(x,y);

const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
console.log("\n===================Panel matematyczny===================");
rl.question("\nPodaj x: ", (x)=>{
    rl.question("Podaj y: ", (y)=>{
        console.log("\n------------------Podejście modułowe--------------------");
        console.log("\nWynik dodawania to: "+math1.dodawanie(x,y));
        console.log("Wynik odejmowania to: "+math1.odejmowanie(x,y));
        console.log("Wynik mnozenia to: "+math1.mnozenie(x,y));
        console.log("\n------------------Podejście obiektowe--------------------");
        console.log("\nWynik dzielenia to: "+math2.dzielenie(x,y));
        console.log("Wynik potęgowania to: (y to wykładnik potęgi) "+math2.potega(x,y));

 rl.close();   
    });
});

rl.on("close", function(){

console.log("\nKoniec panelu matematycznego");
process.exit(0);
});







