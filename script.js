document.addEventListener("DOMContentLoaded", function () {      
    const incomeInputs = document.querySelectorAll('.income-section input[type="number"]');
    const expenseInputs = document.querySelectorAll('.expenses-section input[type="number"]');
    
    const totalIncomeElement = document.getElementById("total-income");
    const totalExpensesElement = document.getElementById("total-expenses");
    const balanceElement = document.getElementById("balance");

    const calculateTotalIncome = () => {
        let totalIncome = 0;
        incomeInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            totalIncome += value;
        });
        totalIncomeElement.innerText = totalIncome.toFixed(2);
        updateBalance();
    }

    const calculateTotalExpenses = () => {
        let totalExpenses = 0;
        expenseInputs.forEach(input => {
            const value = parseFloat(input.value) || 0;
            totalExpenses += value;
        });
        totalExpensesElement.innerText = totalExpenses.toFixed(2);
        updateBalance();
    }

    const updateBalance = () => {
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

document.getElementById('download-pdf').addEventListener('click', generatePDF);

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

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
    const healthExpenses = document.getElementById('health_expenses').value || 0;
    const healthInsurance = document.getElementById('health_insurance').value || 0;
    const food = document.getElementById('food').value || 0;
    const education = document.getElementById('education').value || 0;
    const sport = document.getElementById('sport').value || 0;
    const vacation = document.getElementById('vacation').value || 0;
    const clothingShoes = document.getElementById('clothing_shoes').value || 0;
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
    const rightColumnX = 100; 
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
    currentY += 10; 


    // Top title content
    doc.setFontSize(18);
    doc.text("SpendSavy - Financial Report", 20, 20);

    // Section Revenus
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Incomes", leftColumnX, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const incomeEntries = [
        `Salary: € ${salary}`,
        `Bonuses: € ${bonuses}`,
        `Commissions: € ${commissions}`,
        `Fees: € ${fees}`,
        `Tips: € ${tips}`,
        `Rental Income: € ${rentalIncome}`,
        `Dividends: € ${dividends}`,
        `Interest: € ${interest}`,
        `Capital Gains: € ${capitalGains}`,
        `Pensions: € ${pensions}`,
        `Benefits: € ${benefits}`,
        `Unemployment: € ${unemployment}`,
        `Platform Revenue: € ${platformRevenue}`,
        `Exceptional Income: € ${exceptionalIncome}`,
        `Royalties: € ${royalties}`
    ];

    incomeEntries.forEach(entry => {
        doc.text(entry, leftColumnX, currentY);
        currentY += 10; 
    });

    // Section Expenses
    currentY = 40;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Expenses", rightColumnX, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const expenseEntries = [
        `Rent/Mortgage: € ${rentMortgage}`,
        `Home Insurance: € ${homeInsurance}`,
        `Electricity: € ${electricity}`,
        `Gas: € ${gas}`,
        `Water: € ${water}`,
        `Local Taxes: € ${localTaxes}`,
        `Home Maintenance: € ${homeMaintenance}`,
        `Phone Subscription: € ${phoneSubscription}`,
        `Internet & TV: € ${internetTv}`,
        `Bank Fees: € ${bankFees}`,
        `Miscellaneous services: € ${miscellaneous}`,
        `Transportation: € ${transportation}`,
        `Health Expenses: € ${healthExpenses}`,
        `Health Insurance: € ${healthInsurance}`,
        `Food: € ${food}`,
        `Education: € ${education}`,
        `Sport: € ${sport}`,
        `Vacation: € ${vacation}`,
        `Clothing & Shoes: € ${clothingShoes}`,
        `Loans/Repayments: € ${loansRepayments}`,
        `Savings/Investments: € ${savingsInvestments}`,
        `Income Taxes: € ${incomeTaxes}`,
        `Gifts/Donations: € ${giftsDonations}`,
        `Cleaning Products: € ${cleaningProducts}`,
        `Car Maintenance/Repairs: € ${carMaintenanceRepairs}`
    ];

    expenseEntries.forEach(entry => {
        doc.text(entry, rightColumnX, currentY);
        currentY += 10; 
    });

    // Summary
    currentY = 30; 
    doc.addPage();
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Summary", 20, currentY); 
    currentY += 10; 
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Total Income: € ${totalIncome}`, 20, currentY);
    currentY += 10;
    doc.text(`Total Expenses: € ${totalExpenses}`, 20, currentY);
    currentY += 10;

    // Convert results to number
    totalIncome = parseFloat(document.getElementById('total-income').textContent) || 0;
    totalExpenses = parseFloat(document.getElementById('total-expenses').textContent) || 0;

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
    doc.text(`Balance: € ${balance}`, 20, currentY);

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

const employmentIncome = document.querySelector('.section1');
const capitalIncome = document.querySelector('.section2');
const nonprofesionalIncome = document.querySelector('.section3');
const otherIncome = document.querySelector('.section4');
const housingExpense = document.querySelector('.section5');
const commservicesExpense = document.querySelector('.section6');
const transportationExpense = document.querySelector('.section7');
const healthExpense = document.querySelector('.section8');
const foodExpense = document.querySelector('.section9');
const educationExpense = document.querySelector('.section10');
const leisureExpense = document.querySelector('.section11');
const financesExpense = document.querySelector('.section12');
const otherExpense = document.querySelector('.section13');

function hideEmploymentIncome {
    employmentIncome.classList.add('visible');
    employmentIncome.classList.toggle('hidden');
}
employmentIncome.addEventListener('click', (hideEmploymentIncome);
