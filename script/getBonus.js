document.getElementById('get-bonus-btn')
.addEventListener('click', function(){

    

    const  get_bonus =getValueFrom('get-bonus-number');
    console.log(get_bonus);

    const currentBalance = document.getElementById('balance');
    const oldBalance =getBalance();

    const newBalance = oldBalance + Number(get_bonus);
    setBalance(newBalance);
    const history =document.getElementById("history-container");

    const newHistory =document.createElement("div");

        newHistory.innerHTML =  `
         <div class="transaction-card p-5 bg-gray-300 rounded-md">

         Get Bonus ${get_bonus} taka successful
          ,at ${new Date()}

        </div>
        `;
       history.appendChild(newHistory);
})