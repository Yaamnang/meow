const register = document.querySelector('#register');
const login = document.querySelector('#login');
const nameE1 = document.querySelector('#Name');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector('#pass');
const confirmPasswordE1 = document.querySelector('#confirmPass');
const userNameE1 = document.querySelector('#username');
const passwordE2 = document.querySelector('#password');

register.addEventListener('click',function(e){
	e.preventDefault();

	let isNameValid = checkName(),
	 	isEmailValid = checkEmail(),
		isPasswordValid = checkPassword(),
		isConfirmPasswordValid = ConfirmPassword(); 
	let isFormValid = isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
	if(isFormValid){
        window.open('index.html')
        window.close('login.html')
	}

})

function checkName(){
    let valid = false;
    const name = nameE1.value.trim();
    if(!isRequired(name)){
        showError(nameE1, 'Username cannot be blank.');
    }
    else{
        showSuccess(nameE1);
        valid = true;
    }
    return valid;
};

let isRequired = value => value=== ''?false:true;

let showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    let formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");

    formField.querySelector("small").textContent = "";
    formField.parentElement.querySelector("small").textContent = '';
}

const isEmailValid=(email)=>{
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


function checkEmail(){
    let valid = false;
    const email= emailE1.value.trim();
    if(!isRequired(email)){
        showError(emailE1, ' Email cannot be blank.');
    }
    else if(!isEmailValid(email)){
        showError(emailE1, `Email is not valid`)
    }
    else{
        showSuccess(emailE1);
        valid = true;
    }
    return valid;
}

const isPasswordValid = (password) =>{
    const re = 
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(password);
}

function checkPassword(){
    let valid = false;
    const password = passwordE1.value.trim();
    if(!isRequired(password)){
        showError(passwordE1,"You have to set a password");
    }
    else if(!isPasswordValid(password)){
        showError(passwordE1,"Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character ");
    }
    else{
        showSuccess(passwordE1)
        valid = true;
    }
    return valid;
}
function ConfirmPassword(){
    let valid = false;
    const passwordCheck = confirmPasswordE1.value.trim();
    if(!isRequired(passwordCheck)){
        showError(confirmPasswordE1,"You will have to confirm to proceed");
    }
    else if(!passwordMatch()){
        showError(confirmPasswordE1,"Password is not matching");
    }
    else {
        showSuccess(confirmPasswordE1);
        valid = true;
    }
    return valid;
} 
const passwordMatch = () => {
    if(passwordE1.value == confirmPasswordE1.value){
        return true;
    }
}

const username = ['name','username'];
const password4 = 'password';
login.addEventListener('click',function(e){
    e.preventDefault();

    let isFormValid = confirm();
    if(isFormValid){
        window.open('index.html')
        window.close('login.html')
    }
})


function confirm (){
    let valid = false;
    const name = userNameE1.value.trim();
    const code = passwordE2.value.trim();
    if(!isRequired(name) || !isRequired(code)){
        showInvalid(userNameE1,"Complete your information")
        showInvalid(passwordE2,'Complete your information')
    }
    else if(!isUserNameSame() || !isPasswordSame()){
        showInvalid(userNameE1,'Invalid username or password')
        showInvalid(passwordE2,'Invalid username or password')
    }
    else  {
        showSuccess(userNameE1)
        showSuccess(passwordE2)
        valid= true;
    }
    return valid;
}

function isUserNameSame (){
    if(userNameE1.value === (username[0] || username[1])){
        return true
    }
}

function isPasswordSame(){
    if(passwordE2.value === password4){
        return true;
    }
}
const showInvalid =(input,message)=>{
    const formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");

    formField.parentElement.querySelector("small").textContent = message;
}

const signInButton = document.querySelector('.signInButton')
const registerButton = document.querySelector('.registerButton')
const formBox = document.querySelector('.formBox')
const body = document.querySelector('body')
const reRegister = document.querySelector('.reRegister')

registerButton.onclick = function(){
    formBox.classList.add('active')
    body.classList.add('active')
}

signInButton.onclick = function(){
    formBox.classList.remove('active')
    body.classList.remove('active')
}

