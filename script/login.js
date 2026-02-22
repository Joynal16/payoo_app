document.getElementById('login-btn')
.addEventListener('click', function(){
    
    const numberInput = document.getElementById('input-number');
    const numberSave = numberInput.value;
    console.log('Mobile Number :-',numberSave);

    if(numberSave.length != 11){
        alert('invalid number');
        return;
    }

    const pinInput = document.getElementById('input-pin');
    const pinSave = pinInput.value;
    console.log('Pin code:-', pinSave);


    if(numberSave === '01234567890' && pinSave === '1234'){
        alert('Login Successfully');
        window.location.assign('/home.html');
    }else{
        alert('failed login');
    }
})