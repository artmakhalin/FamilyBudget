'use strict';

let money = +prompt("What's your monthly budget?", "10000"),
    time = prompt("Enter the date in format YYYY-MM-DD", "2024-01-01");

if (money < 0) {
    alert("Error! Budget can't be negative");
    money = 0;
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let category = prompt("Enter this month's required expense item", "Something"),
        amount = +prompt("How much will it cost?", 0);

    if ((typeof(category)) === 'string' && (typeof(category)) != null && (typeof(amount)) != null
        && category != '' && amount != '' && category.length < 50 && amount > 0) {
        console.log("correct");
        appData.expenses[category] = amount;
    } else {
        // add some logic
        console.log("Error!");
        i--;
    }
}

// let i = 0;
// while (i < 2) {
//     let category = prompt("Enter this month's required expense item", "Something"),
//         amount = +prompt("How much will it cost?", 0);

//     if ((typeof(category)) === 'string' && (typeof(category)) != null && (typeof(amount)) != null
//         && category != '' && amount != '' && category.length < 50 && amount > 0) {
//         console.log("correct");
//         appData.expenses[category] = amount;
//     } else {
//         // add some logic
//         alert("Error!");
//     }
//     i++;
// }

// do {
//     let category = prompt("Enter this month's required expense item", "Something"),
//         amount = +prompt("How much will it cost?", 0);

//     if ((typeof(category)) === 'string' && (typeof(category)) != null && (typeof(amount)) != null
//         && category != '' && amount != '' && category.length < 50 && amount > 0) {
//         console.log("correct");
//         appData.expenses[category] = amount;
//     } else {
//         // add some logic
//         alert("Error!");
//     }
//     i++;
// } while (i < 2)

appData.moneyPerDay = appData.budget / 30;

console.log(appData);

alert("Your daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimum");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Medium");
} else if (appData.moneyPerDay >= 2000) {
    console.log("High");
} else {
    console.log("Some error occured");
}
