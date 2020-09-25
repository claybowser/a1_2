//Title : Assignment #1 part 3 : Imperial to Metric Conversion
//Author : Clay Bowser
//Date Last Modified : 2020/09/21
/// Notes : string.split('') breaks stirng into an array
/// 
///

console.log('Imperial To Metric Conversion\n');
var readlineSync = require('readline-sync');

//Global Variables
var tons;
var stone;
var pounds;
var ounces;
var totalOunces;
var totalKilos;
var metricTons;

//Prompt User for input
tons = readlineSync.question('Enter the number of tons: ');
    //User input validation
    while (tons > 1000000 || tons < .0001 || isNaN(tons) ){
        tons = readlineSync.question("Please enter a valid amount in tons: ");
    }
stone = readlineSync.question('Enter the number of stone: ');
    while (stone > 1000000 || stone < .0001 || isNaN(stone)){
        stone = readlineSync.question("Please enter a valid amount in stones: ");
    }
pounds = readlineSync.question('Enter the number of pounds: ');
    while (pounds > 1000000 || pounds < .0001 || isNaN(pounds)){
        pounds = readlineSync.question("Please enter a valid amount in pounds: ");
    }
ounces = readlineSync.question('Enter the number of ounces: ');
    while (ounces > 1000000 || ounces < .0001 || isNaN(ounces)){
        ounces = readlineSync.question("Please enter a valid amount in ounces: ");
    }
//Calculate Ounces
totalOunces = (35840 * tons) + (224 * stone) + (16 * pounds) + parseFloat(ounces);

//Calculate Kilos
totalKilos = totalOunces / 35.274;

//Calculate Metric Tons
metricTons = parseInt(totalKilos/1000);

//Constricting number and converting to string
totalKilos = totalKilos.toFixed(4);
totalKilos = totalKilos.toString();

//turn string into an array
totalKilos = totalKilos.split('');

//Disply data to User
console.log("\nThe metric weight is " + totalKilos[0] + " metric tons, " + totalKilos[1] + totalKilos[2] + totalKilos[3] + " kilos and " +   totalKilos[5] +  totalKilos[6] + totalKilos[7] + "." + totalKilos[8] + " grams.");