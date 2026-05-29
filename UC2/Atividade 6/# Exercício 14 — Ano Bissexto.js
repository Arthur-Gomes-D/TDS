

const input = require("prompt-sync")();

const year = input("Ano: ")

const isLeapYear = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)

switch (isLeapYear) {
    case true:
        console.log(`${year} é ano bissexto`);
        break;
    default:
        console.log(`${year} não é ano bissexto`);
        break;
}

