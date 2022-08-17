//console.log("Deposit.js") //for checking purpose


//step-1 add EventListener to the  deposit button 
document.getElementById("btn-deposit").addEventListener("click", function() {
    //console.log("Deposit button clicked") //for checking purpose

    //step - 2
    const depositField = document.getElementById("deposit-field");
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    //console.log("Deposit amount: " + depositAmount); //for checking purpose


    //step-3
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log("Deposit total: " + depositTotal); //for checking purpose

    //step-4
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5

    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6
    // currentDepositTotalNumber = parseFloat(currentDepositTotal);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    //step-7 : Deposit field empty
    depositField.value = ' ';
})