// Password gen
//these are the constent variables
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


//These are the Functions I use here for lower,upper, number, symbol
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}
//This EventListener waits for a event to occurs When "Click" this perticular function will occurs 'click',() =>
clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea') //parent
    const password = resultEl.innerText

    if(!password) { return } //if no passsword do nothing
//else we follow 
    textarea.value = password
    document.body.appendChild(textarea) //rep parent node
    textarea.select()
    document.execCommand('copy') //it runs the command
    textarea.remove()
    alert('Password copied to clipboard!')
})
//This EventListener waits for a event to occurs When "Click" this perticular function will occurs 'click',() =>
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value //without + lenghth show as character
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length) //here genrate password is function i created to get all these in innerText
})
//here i am creating functions
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '' //i set it empty by default
    const typesCount = lower + upper + number + symbol //result containing all these things
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]) //array-like objects that provide a mechanism for reading and writing raw binary data in memory buffers. Array of types i am including also use filter that filters false value
    if(typesCount === 0) { 
        return '' //here i checktypes count is 0 then nothing genrate it will just empty so i have to select at least 1
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}



// For log in

// const pword = document.querySelector('#Password');
// const password = document.querySelector('#passBox');
// pword.addEventListener('click', function (e) {
//     const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
//     password.setAttribute('type', type);
//     this.classList.toggle('fa-eye-slash');
// });

// Form validation
const email = document.querySelector("#email")
const password = document.querySelector('#password');
const form = document.querySelector("form");


// Message
const showError = (input,message) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");

    error.innerText = message;
    input.style.borderColor = "Red";
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");

    error.innerText = "";
    input.style.borderColor = "#888888";
}


// Utility functions
const isRequired = (value) => value === "" ? true : false;
const isBetween = (length,min,max) => length < min || length > max ? true : false;

// Email validation
const isEmailValid = (email) => {
    const re = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return re.test(email)
}

const checkEmail = () => {
    let valid = false
    const Text = email.value.trim();
    if (isRequired(Text)){
        console.log(1)
        showError(email,"Email cannot be blank.")
    }
    else if (!isEmailValid(Text)){
        console.log(2)
        showError(email,"Email is not valid.")
    }
    else {
        console.log(3)
        showSuccess(email);
        valid = true;
    }
    return valid;
}

// Password validation
const isPasswordSecure = (value) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(value);
}

const CheckPassword = () => {
    let valid = false;
    const text = password.value.trim();

    if (isRequired(text)){
        showError(password,"Password cannot be blank.")
    }
    else if (!isPasswordSecure(text)){
        showError(password,`Invalid pasword`)
    }
    else{
        showSuccess(password)
        valid = true;
    }
    return valid;
};

form.addEventListener("submit",function (e) {
    e.preventDefault();

    let check1 = CheckPassword()
    let check2 = checkEmail()
    let isFormValid = check1 && check2;

    if(isFormValid){
        resetForm()
        window.open('index.html')
        window.close('login.html')
    }
});

function resetForm(){
    password.value = "" 
    email.value = "" 
}
// Login form




// Signin form
function onFormSubmit() {
    resetForm();
  }
  function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["email"] = document.getElementById("email").value;
    formData["dob"] = document.getElementById("dob").value;
    //   console.log(formData);
    return formData;
  }
  
  function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dob").value = "";
    selectedRow = null;
  }
  
 

  
  function onFormSubmit() {
    if (validatename()) {
      resetForm();
    }}
// login form
function onFormSubmit() {
    resetForm();
  }
  function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("namefield").value;
    formData["email"] = document.getElementById("passwordfield").value;
    //   console.log(formData);
    return formData;
  }
  
  function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
  }
  
  function validatename() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
      isValid = false;
      document.getElementById("nameValidationError").classList.remove("hide");
    } else {
      isValid = true;
      if (
        document.getElementById("nameValidationError").classList.contains("hide")
      );
      document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
  }

  
  function onFormSubmit(k) {
    if(k=1){

    }else{if (validatename()) {
        resetForm();
      }}}
    
    
let loginpassword=document.getElementsByClassName("result-container").value;
let namefieldvalue=document.getElementsByID("namefield").value
let passwordfieldvalue=document.getElementsByID("passwordfield").value
const valid=1;
const Invalid=0;
if(loginpassword==namefieldvalue&&loginpassword==passwordfieldvalue){
    window.open('index.html')
    window.close('login.html')
}
else{
    resetForm()
}
  