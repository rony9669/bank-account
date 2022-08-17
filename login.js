// console.log('Login js file'); //use for test purpose 

// step -1:  add click event handler with the submit button

document.getElementById("btn-submit").addEventListener(`click`, function() {
    //console.log('Submit button clicked');//use for test purpose 

    //step-2: get the email address inside the email input filed 

    const emailField = document.getElementById('user-email');

    const email = emailField.value;
    // console.log(email); //use for test purpose

    //step-3: get the password inside the password input filed
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);//use for test purpose

    //DANGER: DO NOT VERIFY EMAIL AND PASSWORD ON THE CLIENT SIDE

    //STEP-4: VERIFY EMAIL AND PASSWORD 
    if (email === 'ronychowdhury@gmail.com' && password === '123456') {
        //console.log('Valid user')
        window.location.href = 'bank.html';
    } else {
        // console.log('Invalid user');
        alert('Please provide correct email or password ');
    }



})