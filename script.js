const form = document.getElementsByTagName('form')[0]
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');

let emailValid = false;

const validateEmail = ()=>{
    email.addEventListener('keyup', ()=>{
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){ //checks if valid email format
            emailValid = true;
            emailError.textContent = 'Valid e-mail entered.'
            emailError.classList.remove('error');
            emailError.classList.add('valid');
            
        } else{
            emailError.textContent = '*Please enter a valid e-mail address';
        }
    })

    email.addEventListener('blur', ()=>{
        emailError.style.display = 'none'; //removes message when clicked outside
    })
}
validateEmail();

let pInput = document.querySelector('#password');
const numbers = /[0-9]/g;
const upperCaseLetters = /[A-Z]/g;
const msg = document.querySelector('#message')
const upper = document.querySelector('#pUppercase');
const number = document.querySelector('#pNumber');
const length = document.querySelector('#pLength');

let passwordValid = false;



const validatePassword = ()=>{
    password.addEventListener('keyup', ()=>{
        if(password.value.match(upperCaseLetters)){ //checks if uppercase letter exists
            upper.classList.remove('error');
            upper.classList.add('valid');
            passwordValid = true;
        }
        else {
            upper.classList.remove('valid');
            upper.classList.add('error');
            passwordValid = false;
          }
    
        if(password.value.match(numbers)){  //checks if a number exists
            number.classList.remove('error');
            number.classList.add('valid');
            passwordValid = true;
        } 
        else {
            number.classList.remove('valid');
            number.classList.add('error');
            passwordValid = false;
        }
    
        if(password.value.length >= 9) {
            length.classList.remove('error'); //checks password length
            length.classList.add('valid');
            passwordValid = true;
        }
        else {
            length.classList.remove('valid');
            length.classList.add('error');
            passwordValid = false;
        }
    })
    if(password.value.length == 0){
        passwordValid = false;
    }
    password.addEventListener('focus', ()=>{
        msg.style.display = 'block'; //display message when focused

    })

    password.addEventListener('blur', ()=>{
        msg.style.display = 'none'; //removes message when clicked outside
    })
} 
validatePassword();


const confirmPassword = document.querySelector('#confirmPassword');
const confirmError = document.querySelector('#confirmError');

let passwordsMatch = false;

const confirmMatch = ()=>{
    confirmPassword.addEventListener('keyup', ()=>{

        confirmError.style.display = 'block';

           if(confirmPassword.value == password.value) {
               confirmError.textContent = 'Passwords match';
               
               confirmError.classList.remove('error');
               confirmError.classList.add('valid');

               passwordsMatch = true;
           }
           else{
               confirmError.textContent ='Passwords do not match'
               confirmError.classList.remove('valid');
               confirmError.classList.add('error');

               passwordsMatch = false;
           }
   })
   
   confirmPassword.addEventListener('blur', ()=>{
       confirmError.style.display = 'none'; //removes message when clicked outside
   })
}
confirmMatch();

const country = document.querySelector('#country')

const zipcode = document.querySelector('#zipcode')
const zipMsg = document.querySelector('#zipMsg');

let zipValid = false;

const validateZip = ()=>{
    zipcode.addEventListener('keyup', ()=>{

        zipMsg.style.display = 'block';

            if(zipcode.value.length == 5 ) {
                zipMsg.classList.remove('error');
                zipMsg.classList.add('valid');

                zipValid = true;
            }
            else{
                zipMsg.classList.remove('valid');
                zipMsg.classList.add('error');

                zipValid = false;
            }
    })

    zipcode.addEventListener('blur', ()=>{
        zipMsg.style.display = 'none'; //removes message when clicked outside
    })
}
validateZip();

const validateForm = ()=>{
    form.addEventListener('submit', (e)=>{
        if(emailValid === false) {
            email.style.border = '2px solid red';
            email.style.background = '#f3d7d7'
            e.preventDefault();
        }
        if(passwordValid === false) {
            password.style.border = '2px solid red';
            password.style.background = '#f3d7d7'
            e.preventDefault();
        }
        if(passwordsMatch === false) {
            confirmPassword.style.border = '2px solid red';
            confirmPassword.style.background = '#f3d7d7'
            e.preventDefault();
        }
        if(country.value == 'Select') {
            country.style.border = '2px solid red';
            country.style.background = '#f3d7d7';
            e.preventDefault();
        }
        if(zipValid === false) {
            zipcode.style.border = '2px solid red';
            zipcode.style.background = '#f3d7d7'
            e.preventDefault();
        }
    })
}
validateForm();