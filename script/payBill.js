document.getElementById('pay-bill-btn').addEventListener('click',function(){

    //bank account get
    const bankAccount = getValueFrom('pay-bill-bank');
    if(bankAccount =='Select bank'){
        alert('please select a bank');
        return;
    }

    //get bank account number 
    const accno =getValueFrom('pay-bill-acc-number');
    if(accno.length != 11){
        alert('invalid account number');
    }

    // get ammount 
    const amount =getValueFrom('pay-bill-amount');

    const newBalance = getBalance() - Number(amount);
    
    const pin = getValueFrom('pay-bill-pin');
    if(pin =='1234'){
        alert(`Payment successfully from ${bankAccount}
             at ${new Date()}`);
        setBalance(newBalance);

        const history =document.getElementById("history-container");

        const newHistory =document.createElement("div");

        newHistory.innerHTML =  `
         <div class="transaction-card p-5 bg-gray-300 rounded-md">

         Payment success from
            ${bankAccount} , account-no  ${accno} at ${new Date()}
             at ${new Date()}

        </div>
        `;

        history.append(newHistory);
    }else{
        alert('invalid pin')
        return;
    }
})