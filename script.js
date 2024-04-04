'use strict';

let money, time;

function start() {
    money = +prompt("What's your monthly budget?", "10000");
    time = prompt("Enter the date in format YYYY-MM-DD", "2024-01-01");

    while(isNaN(money) || money == "" || money == null || money < 0) {
        money = +prompt("What's your monthly budget?", "10000");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let category = prompt("Enter this month's required expense item", "Something"),
            amount = +prompt("How much will it cost?", 0);
    
        if ((typeof(category)) === 'string' && (typeof(category)) != null && (typeof(amount)) != null
            && category != '' && amount != '' && category.length < 50 && amount > 0) {
            console.log("Correct!");
            appData.expenses[category] = amount;
        } else {
            // add some logic
            console.log("Error!");
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Your daily budget: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimum");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log("Medium");
    } else if (appData.moneyPerDay >= 2000) {
        console.log("High");
    } else {
        console.log("Some error occured");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings) {
        let save = +prompt("What's the amount of savings?"),
            percent = +prompt("What's the percent?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Income per month from your deposit: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExpense = prompt("Optional expense item?");
        if ((typeof(optExpense)) === 'string' && (typeof(optExpense)) != null && optExpense != ''
            && optExpense.length < 50) {
                console.log("Correct!");
                appData.optionalExpenses[i] = optExpense;
        } else {
            console.log("Error!");
            i--;
        }
    }
}

chooseOptExpenses();
console.log(appData);