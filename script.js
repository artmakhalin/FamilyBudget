'use strict';

let money = +prompt("What's your monthly budget?", "10000");
    time = prompt("Enter the date in format YYYY-MM-DD", "2024-01-01");
    category1 = prompt("Enter this month's required expense item", "Something");
    amount1 = +prompt("How much will it cost?", 0);
    category2 = prompt("Enter this month's required expense item", "Something");
    amount2 = +prompt("How much will it cost?", 0);

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        category1: amount1,
        category2:amount2
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

console.log(appData);

alert("Your daily budget: " + money / 30)
