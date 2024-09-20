document.addEventListener("DOMContentLoaded", function () {
    const incomeInputs = document.querySelectorAll('.income-section input[type="number"]');
    const expenseInputs = document.querySelectorAll('.expenses-section input[type="number"]');
    
    const totalIncomeElement = document.getElementById("total-income");
    const totalExpensesElement = document.getElementById("total-expenses");
    const balanceElement = document.getElementById("balance");

    function calculateTotalIncome() {
        let totalIncome = 0;
        incomeInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            totalIncome += value;
        });
        totalIncomeElement.innerText = totalIncome.toFixed(2) + " " + "€";;
        updateBalance();
    }

    function calculateTotalExpenses() {
        let totalExpenses = 0;
        expenseInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            totalExpenses += value;
        });
        totalExpensesElement.innerText = totalExpenses.toFixed(2) + " " + "€";
        updateBalance();
    }

    function updateBalance() {
        const totalIncome = parseFloat(totalIncomeElement.innerText) || 0;
        const totalExpenses = parseFloat(totalExpensesElement.innerText) || 0;
        const balance = totalIncome - totalExpenses;
        balanceElement.innerText = balance.toFixed(2) + " " + "€";

        balanceElement.style.fontWeight = 'bolder';
        balanceElement.style.fontSize = '15pt';


        if (balance > 0) {
            balanceElement.style.color = 'green';
        } else if (balance === 0) {
            balanceElement.style.color = 'black';
        } else {
            balanceElement.style.color = 'red';
        }
    }

    incomeInputs.forEach(input => {
        input.addEventListener('input', calculateTotalIncome);
    });

    expenseInputs.forEach(input => {
        input.addEventListener('input', calculateTotalExpenses);
    });

    calculateTotalIncome();
    calculateTotalExpenses();
});

 
