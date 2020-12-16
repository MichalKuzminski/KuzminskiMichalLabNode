 let Currency = function(russianRubel,euro) {
     this.russianRubel = russianRubel;
     this.euro = euro;
     }
     Currency.prototype.roundTwoDecimals = function(amount) {
     return Math.round(amount * 100) / 100;
     }
     Currency.prototype.rubToPln = function(russian) {
     return this.roundTwoDecimals(russian * this.russianRubel);
     }
     Currency.prototype.plnToRub = function(pln_rub) {
     return this.roundTwoDecimals(pln_rub / this.russianRubel);
     }
     Currency.prototype.plnToEur = function(eur) {
    return this.roundTwoDecimals(eur / this.euro);
    }
    Currency.prototype.eurToPln = function(pln) {
    return this.roundTwoDecimals(pln * this.euro);
    }
    module.exports = exports = Currency;
