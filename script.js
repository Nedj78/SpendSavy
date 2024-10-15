const totalIncomeElement = document.getElementById("total-income");
const totalExpensesElement = document.getElementById("total-expenses");

const balanceElement = document.getElementById("balance");

let totalIncome = parseFloat(totalIncomeElement.innerText) || 0;
let totalExpenses = parseFloat(totalExpensesElement.innerText) || 0;
let balance = totalIncome - totalExpenses;

document.addEventListener("DOMContentLoaded", function () {      
    const incomeInputs = document.querySelectorAll('.income-section input[type="number"]');
    const expenseInputs = document.querySelectorAll('.expenses-section input[type="number"]');

    const calculateTotalIncome = () => {
        let totalIncome = 0;
        incomeInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            totalIncome += value;
        });
        totalIncomeElement.innerText = totalIncome.toFixed(2) + " " + "$";
        updateBalance();
    }

    const calculateTotalExpenses = () => {
        let totalExpenses = 0;
        expenseInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            totalExpenses += value;
        });
        totalExpensesElement.innerText = totalExpenses.toFixed(2) + " " + "$";
        updateBalance();
    }

    const updateBalance = () => {
        totalIncome = parseFloat(totalIncomeElement.innerText) || 0;
        totalExpenses = parseFloat(totalExpensesElement.innerText) || 0;
        balance = totalIncome - totalExpenses;
        balanceElement.innerText = balance.toFixed(2) + " " + "$";

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

    document.getElementById('download-pdf').addEventListener('click', generatePDF);
});

function generatePDF() {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF({
        orientation: "portrait",
        unit: 'mm',
        format: "a4", 
    });
    
    // Incomes
    const salary = document.getElementById('salary').value || 0;
    const bonuses = document.getElementById('bonuses').value || 0;
    const commissions = document.getElementById('commissions').value || 0;
    const fees = document.getElementById('fees').value || 0;
    const tips = document.getElementById('tips').value || 0;
    const rentalIncome = document.getElementById('rental_income').value || 0;
    const dividends = document.getElementById('dividends').value || 0;
    const interest = document.getElementById('interest').value || 0;
    const capitalGains = document.getElementById('capital_gains').value || 0;
    const pensions = document.getElementById('pensions').value || 0;
    const benefits = document.getElementById('benefits').value || 0;
    const unemployment = document.getElementById('unemployment').value || 0;
    const platformRevenue = document.getElementById('platform_revenue').value || 0;
    const exceptionalIncome = document.getElementById('exceptional_income').value || 0;
    const royalties = document.getElementById('royalties').value || 0;

    // Expenses
    const rentMortgage = document.getElementById('rent_mortgage').value || 0;
    const homeInsurance = document.getElementById('home_insurance').value || 0;
    const electricity = document.getElementById('electricity').value || 0;
    const gas = document.getElementById('gas').value || 0;
    const water = document.getElementById('water').value || 0;
    const localTaxes = document.getElementById('local_taxes').value || 0;
    const homeMaintenance = document.getElementById('home_maintenance').value || 0;
    const phoneSubscription = document.getElementById('phone_subscription').value || 0;
    const internetTv = document.getElementById('internet_tv').value || 0;
    const bankFees = document.getElementById('bank_fees').value || 0;
    const miscellaneous = document.getElementById('miscellaneous').value || 0;
    const transportation = document.getElementById('transportation').value || 0;
    const health = document.getElementById('health_expenses').value || 0;
    const healthInsurance = document.getElementById('health_insurance').value || 0;
    const grocery = document.getElementById('grocery').value || 0;
    const restaurant = document.getElementById('restaurant').value || 0;
    const education = document.getElementById('education').value || 0;
    const sport = document.getElementById('sport').value || 0;
    const vacation = document.getElementById('vacation').value || 0;
    const clothingShoes = document.getElementById('clothing_shoes').value || 0;
    const books = document.getElementById('books').value || 0;
    const outings = document.getElementById('outings').value || 0;
    const cosmetic = document.getElementById('cosmetic').value || 0;
    const hairstyle = document.getElementById('hairdresser').value || 0;
    const care = document.getElementById('care').value || 0;
    const loansRepayments = document.getElementById('loans_repayments').value || 0;
    const savingsInvestments = document.getElementById('savings_investments').value || 0;
    const incomeTaxes = document.getElementById('income_taxes').value || 0;
    const giftsDonations = document.getElementById('gifts_donations').value || 0;
    const cleaningProducts = document.getElementById('cleaning_products').value || 0;
    const carMaintenanceRepairs = document.getElementById('car_maintenance_repairs').value || 0;

    // Calculated totals
    let totalIncome = document.getElementById('total-income').textContent || 0;
    let totalExpenses = document.getElementById('total-expenses').textContent || 0;
    let balance = document.getElementById('balance').textContent || 0;

    // Column positions
    const leftColumnX = 20;
    const rightColumnX = 80; 
    const secondRightColumnX = 145;
    let currentY = 30; 

    // Get current date
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Display current date
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`${formattedDate}`, leftColumnX, currentY); 
    currentY += 20; 

    // Top title content
    doc.setFontSize(18);
    doc.text("Spend$avy - Financial Report", 20, 20);

    // Section Revenus
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Incomes", leftColumnX, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const incomeEntries = [
        { label: "Salary", value: salary },
        { label: "Bonuses", value: bonuses },
        { label: "Commissions", value: commissions },
        { label: "Fees", value: fees },
        { label: "Tips", value: tips },
        { label: "Rental Income", value: rentalIncome },
        { label: "Dividends", value: dividends },
        { label: "Interest", value: interest },
        { label: "Capital Gains", value: capitalGains },
        { label: "Pensions", value: pensions },
        { label: "Benefits", value: benefits },
        { label: "Unemployment", value: unemployment },
        { label: "Platform Revenue", value: platformRevenue },
        { label: "Exceptional Income", value: exceptionalIncome },
        { label: "Royalties", value: royalties }
    ];

    incomeEntries.forEach(entry => {
        if (entry.value > 0) {
            doc.setTextColor(0, 128, 0); // Green
        } else {
            doc.setTextColor(0, 0, 0); // Black
        }

        doc.text(`${entry.label}: $ ${entry.value}`, leftColumnX, currentY);
        currentY += 10; 
        doc.setTextColor(0, 0, 0);
    });

    // Section Expenses
    currentY = 50;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Expenses", rightColumnX, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const expensesEntries = [
        { label: "Rent/Mortgage", value: rentMortgage },
        { label: "Home Insurance", value: homeInsurance },
        { label: "Electricity", value: electricity },
        { label: "Gas", value: gas },
        { label: "Water", value: water },
        { label: "Local Taxes", value: localTaxes },
        { label: "Home Maintenance", value: homeMaintenance },
        { label: "Phone Subscription", value: phoneSubscription },
        { label: "Internet/TV", value: internetTv },
        { label: "Bank Fees", value: bankFees },
        { label: "Miscellaneous", value: miscellaneous },
        { label: "Transportation", value: transportation },
        { label: "Health Expenses", value: health },
        { label: "Health Insurance", value: healthInsurance },
        { label: "Grocery", value: grocery },
    ];

    expensesEntries.forEach(entry => {
        if (entry.value > 0) {
            doc.setTextColor(255, 0, 0); // Red
        } else {
            doc.setTextColor(0, 0, 0); // Black
        }

        doc.text(`${entry.label}: $ ${entry.value}`, rightColumnX, currentY);
        currentY += 10; 
        doc.setTextColor(0, 0, 0);
    });

    currentY = 50;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Expenses", rightColumnX, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);

    const secondExpensesEntries = [
        { label: "Restaurant", value: restaurant },
        { label: "Education", value: education },
        { label: "Sport", value: sport },
        { label: "Vacation", value: vacation },
        { label: "Clothing/Shoes", value: clothingShoes },
        { label: "Books", value: books },
        { label: "Outings", value: outings },
        { label: "Cosmetic", value: cosmetic },
        { label: "Hairdresser", value: hairstyle },
        { label: "Care", value: care },
        { label: "Loans Repayments", value: loansRepayments },
        { label: "Savings/Investments", value: savingsInvestments },
        { label: "Income Taxes", value: incomeTaxes },
        { label: "Gifts/Donations", value: giftsDonations },
        { label: "Cleaning Products", value: cleaningProducts },
        { label: "Car Maintenance/Repairs", value: carMaintenanceRepairs },
    ];

    secondExpensesEntries.forEach(entry => {
        if (entry.value > 0) {
            doc.setTextColor(255, 0, 0); // Red
        } else {
            doc.setTextColor(0, 0, 0); // Black
        }

        doc.text(`${entry.label}: $ ${entry.value}`, secondRightColumnX, currentY);
        currentY += 10; 
    });

    // Summary
    currentY = 220; 
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Summary", 20, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    // Convert results to number
    totalIncome = parseFloat(document.getElementById('total-income').textContent) || 0;
    totalExpenses = parseFloat(document.getElementById('total-expenses').textContent) || 0;
    doc.text(`Total Income: ${totalIncome}`, 20, currentY);
    currentY += 10;
    doc.text(`Total Expenses: ${totalExpenses}`, 20, currentY);
    currentY += 10;

    balance = totalIncome - totalExpenses;
 
    balance = parseFloat(balance); 

    if (balance > 0) {
        console.log("Le solde est positif.");
        doc.setTextColor(0, 128, 0); // Green
    } else if (balance === 0) {
        console.log("Le solde est zéro.");
        doc.setTextColor(0, 0, 0); // Black
    } else {
        console.log("Le solde est négatif.");
        doc.setTextColor(255, 0, 0); // Red
    }

    doc.setFont("helvetica", "bold");
    doc.text(`Balance: $ ${balance}`, 20, currentY);

    const pdfDataUri = doc.output('datauristring');

    const newWindow = window.open();
    newWindow.document.write(`
        <html>
            <head>
                <title>SpendSavy report</title> 
            </head>
            <body>
                <iframe width="100%" height="100%" src="${pdfDataUri}"></iframe>
            </body>
        </html>
        `);
    };

const hideTotalColumns = document.querySelector('.total-column');
const darkBackground = document.querySelector('.dark');
const cross = document.querySelector('.delete-total-group');
const ctaOpen = document.querySelector('.cta-open');

cross.addEventListener('click', () => {
    hideTotalColumns.classList.add('hidden'); 
    darkBackground.classList.add('hidden');
    ctaOpen.style.display = 'flex';
});

ctaOpen.addEventListener('click', () => {
    hideTotalColumns.classList.toggle('hidden'); 
    darkBackground.classList.toggle('hidden'); 
    ctaOpen.style.display = 'none';  
});

document.addEventListener("DOMContentLoaded", function () {

    function createToggle(divClass, inputsClass) {
        const divElement = document.querySelector(divClass);
        const inputsElement = document.querySelector(inputsClass); 

        // Initialize the hidden state
        inputsElement.classList.add('hidden');

        function toggle() {
            const isVisible = inputsElement.classList.toggle('hidden');
            divElement.setAttribute('aria-expanded', !isVisible);
        }

        divElement.addEventListener('click', toggle);
    }

    // Revenues
    createToggle('.employmentIncome', '.employment-inputs');
    createToggle('.capitalIncome', '.capitalIncome-inputs');
    createToggle('.nonprofessionalIncome', '.nonprofessionalIncome-inputs');
    createToggle('.otherIncome', '.otherIncome-inputs');

    // Expenses
    createToggle('.housingExpense', '.housingExpense-inputs');
    createToggle('.commservicesExpense', '.commservicesExpense-inputs');
    createToggle('.transportationExpense', '.transportationExpense-inputs');
    createToggle('.healthExpense', '.healthExpense-inputs');
    createToggle('.foodExpense', '.foodExpense-inputs');
    createToggle('.educationExpense', '.educationExpense-inputs');
    createToggle('.leisureExpense', '.leisureExpense-inputs');
    createToggle('.wellnessExpense', '.wellnessExpense-inputs');
    createToggle('.financesExpense', '.financesExpense-inputs');
    createToggle('.otherExpense', '.otherExpense-inputs');
});

document.addEventListener("DOMContentLoaded", function () {
    const inputElements = document.querySelectorAll('input[type="number"]');

    inputElements.forEach(input => {
        input.addEventListener('input', function () {
            this.value = this.value.replace(/[^0-9.,]/g, '');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const clearEntries = document.querySelector('.clear-entries');

    clearEntries.addEventListener('click', () => {
        const inputFields = document.querySelectorAll('input[type="number"]');
        inputFields.forEach(input => {
            input.value = ''; 
        });

        totalIncome = 0;
        totalIncomeElement.innerText = totalIncome.toFixed(2) + " " + "$";
        totalIncomeElement.style.color = 'black';

        let totalExpenses = 0;
        totalExpensesElement.innerText = totalExpenses.toFixed(2) + " " + "$";
        totalExpensesElement.style.color = 'black';

        balance = 0;
        balanceElement.innerText = balance.toFixed(2) + " " + "$";
        balanceElement.style.color = 'black';
    });
});
