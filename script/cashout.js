document.getElementById('cashout-btn').addEventListener('click', function(){

    const cashoutNumber =getValueFrom('cashout-number');
     if(cashoutNumber.length != 11){
        alert('invalid number');
        return;

    }
    const cashoutAmount=getValueFrom('cashout-amount');


    const currentBalance = document.getElementById('balance');
    
    const oldBalance =getBalance();

    const newBalance = oldBalance - Number(cashoutAmount);
    console.log(newBalance);

    if(newBalance < 0){
        alert('invalid balance');
        return;
    } 

    const cashoutPin = getValueFrom('cashout-pin');
    if(cashoutPin == '1234'){
        alert('cashout successfully');
        setBalance(newBalance);

        const history =document.getElementById("history-container");

        const newHistory =document.createElement("div");

        newHistory.innerHTML =  `
         <div class="transaction-card p-5 bg-gray-300 rounded-md">

         CashOut ${cashoutAmount} taka successful to
            ${cashoutNumber} , at ${new Date()}
             at ${new Date()}

        </div>
        `;

        history.append(newHistory);
    }else{
        alert('invalid pin code bro');
        return;
    }
}); 
 
 
 
 // document.getElementById('cashout-btn').addEventListener('click', function(){

    // get agent number
   // const agentInput = document.getElementById('cashout-number');
   // const agentSave = agentInput.value;
   // console.log('Agent Number :-', agentSave);

    //if(agentSave.length != 11){
       // alert('invalid number');
       // return;
  //  }



    //get amount number
   // const amountInput = document.getElementById('cashout-amount');
   // const amountSave = amountInput.value;
   // console.log('Cash Amount is :-', amountSave);




    //get current and after new amount

   // const currentBalance = document.getElementById('balance');
   // const getBalance = currentBalance.innerText;
   // const newBalance = Number(getBalance) - Number(amountSave);

    //if(newBalance < 0){
     //   alert('invalid taka');
     //   return;
   // }
    
    //get pin code 
   // const pinCode = document.getElementById('cashout-pin');
   // const codeSave = pinCode.value;
   // console.log('Pin Code is:-', codeSave);
   // if(codeSave == '1234'){
     //   alert('cashout successful');
     //   currentBalance.innerText= newBalance;
   // }else{
     //   alert('wrong pin code');
      //  return;
   // }
// })
