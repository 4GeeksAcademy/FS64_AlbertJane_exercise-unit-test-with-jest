 const sum = (a,b) => {
    return a + b;
}

let oneEurols = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

const fromDollarToYen = (dollars) => {
    const yens = dollars / oneEurols.USD * oneEurols.JPY;
    return parseFloat(yens.toFixed(2)); 
}

const fromYenToPund = (yens) => {
    const pounds = yens / oneEurols.JPY * oneEurols.GBP
    return parseFloat(pounds.toFixed(2))
}
const fromEuroToDollar = (euros) => {
    return euros * oneEurols.USD;
}
module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPund,
    sum
};
