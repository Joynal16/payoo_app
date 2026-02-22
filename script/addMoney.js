document.getElementById('add-money-btn').addEventListener('click',function(){

    //bank account get
    const bankAccount = getValueFrom('add-money-bank');
    if(bankAccount =='Select a bank'){
        alert('please select a bank');
        return;
    }

    //get bank account number 
    const accno =getValueFrom('add-money-number');
    if(accno.length != 11){
        alert('invalid account number');
    }

    // get ammount 
    const amount =getValueFrom('add-money-amount');

    const newBalance = getBalance() + Number(amount);
    
    const pin = getValueFrom('add-money-pin');
    if(pin =='1234'){
        alert(`Add money success from ${bankAccount}
             at ${new Date()}`);
        setBalance(newBalance);

        const history =document.getElementById("history-container");

        const newHistory =document.createElement("div");

        newHistory.innerHTML =  `
         <div class="transaction-card p-5 bg-gray-300 rounded-md">

         Add money success from
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