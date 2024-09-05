let interestRate = 0.12;

document.getElementById('get-roi').addEventListener('click', function() {

    let initialInvestment = parseInt(document.getElementById('initial-investment').value);
    let investmentYears = parseInt(document.getElementById('investment-years').value);

    let totalAmount = initialInvestment;
    for (let i = 1; i <= investmentYears; i++) {
        totalAmount += totalAmount * interestRate;
    }
    document.getElementById('result').innerHTML = `if you invest $${initialInvestment} After ${investmentYears} years, your investment will be $${totalAmount.toFixed(2)}.`;
});