//console.log("Deposit.js") //for checking purpose


//step-1 add EventListener to the  withdraw button 
document.getElementById("btn-withdraw").addEventListener("click", function() {
    //console.log("Deposit button clicked") //for checking purpose

    //step - 2
    const withdrawField = document.getElementById("withdraw-field");
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-7 : Deposit field empty
    withdrawField.value = ' ';

    if (isNaN(newWithdrawAmount)) {

        alert("Please enter a valid number");
        return;

    }


    //console.log("Deposit amount: " + depositAmount); //for checking purpose


    //step-3
    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log("Deposit total: " + depositTotal); //for checking purpose



    //step-5

    const balanceWdTotalElement = document.getElementById("balance-total");
    const previousBalanceWdTotalString = balanceWdTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceWdTotalString);




    if (newWithdrawAmount > previousBalanceTotal) {

        alert("Baper Bank e ato taka nai");

        return;

    }
    //step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6


    const newWdBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceWdTotalElement.innerText = newWdBalanceTotal;


})