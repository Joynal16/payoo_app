document.getElementById('transfer-btn').addEventListener('click', function(){

    const transferNumber =getValueFrom('transfer-number');
     if(transferNumber.length != 11){
        alert('invalid number');
        return;

    }
    const transferAmount=getValueFrom('transfer-amount');


    const currentBalance = document.getElementById('balance');
    
    const oldBalance =getBalance();

    const newBalance = oldBalance - Number(transferAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert('invalid balance');
        return;
    } 

    const transferPin = getValueFrom('transfer-pin');
    if(transferPin == '1234'){
        alert('send money successfully');
        setBalance(newBalance);

        const history =document.getElementById("history-container");

        const newHistory =document.createElement("div");

        newHistory.innerHTML =  `
         <div class="transaction-card p-5 bg-gray-300 rounded-md">

         Send ${transferAmount} taka successful to
            ${transferNumber} , at ${new Date()}
             at ${new Date()}

        </div>
        `;

        history.append(newHistory);
    }else{
        alert('invalid pin code bro');
        return;
    }
}); 
 