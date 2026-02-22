

//machine id 

function getValueFrom(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}



// machine -> balance
function getBalance(){
   const currentBalance = document.getElementById('balance');
   const balance = currentBalance.innerText;
   console.log('current balance is :-', Number(balance));
   return Number(balance);
}

//machine -> set balance 

function setBalance(value){
    const currentBalance = document.getElementById('balance');
    currentBalance.innerText=value;
}


function showOnly(id){
    const addMoney =document.getElementById('add-money');
    const cashout =document.getElementById('cashout');
    const history =document.getElementById('history');
    const getBonus =document.getElementById('get-bonus');
    const payBill =document.getElementById('pay-bill');
    const transfer =document.getElementById('transfer-money');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    getBonus.classList.add('hidden');
    payBill.classList.add('hidden');
    transfer.classList.add('hidden');


    const selected =  document.getElementById(id)
    selected.classList.remove('hidden');
}