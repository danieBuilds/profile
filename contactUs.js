const form = document.getElementById('contact-form');

form.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const message = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    const success = document.getElementById("success");
    

    const emailText = email.value.trim();
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageText = message.value.trim();
    
    if (!validEmail.test(emailText)) {
        emailError.innerHTML = "please make sure email address is correct"
        success.innerHTML = '';
        
    }else if (messageText.length < 10) {
        emailError.innerHTML = "";
        if(messageError) messageError.innerHTML = 'please make sure message is more than 10 characters long';
    }else{
        messageError.innerHTML = '';
        success.innerHTML = "application was successful🎉";
    }
}