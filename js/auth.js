let FirstName=document.getElementById('firstName'),
    LastName=document.getElementById('LastName'),
    Email=document.getElementById('UEmail'),
    UPassword=document.getElementById('UPassword'),
    Days=document.getElementById('UDay'),
    Months=document.getElementById('UMonth'),
    years=document.getElementById('UYear'),
    gender=document.getElementById('genderSelect'),
    registerBtn=document.getElementById('register'),
    ProfileName=document.getElementById('ProfileName'),
    formVal=document.getElementById('validForm');




    let SetError=(ele, error)=>{    
        let inputControl=ele.parentElement;
        let errorDisplay=inputControl.querySelector(".error")
        errorDisplay.innerText=error;
        ele.classList.add("is-invalid");
        ele.classList.remove("is-valid");
    }
    let SetSuccess=(ele)=>{
       
        let inputControl=ele.parentElement;
        let errorDisplay=inputControl.querySelector(".error")
        errorDisplay.innerText='';
        ele.classList.remove("is-invalid");
        ele.classList.add("is-valid");
    }
    
    let EmailValidation= (email)=>{
        let rgxEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return rgxEmail.test(String(email).toLowerCase());
    }

    let PassValidation= (UPassword)=>{
        let rgxPassword =  /"^[a-zA-Z0-9]{8}$"/;
        return UPassword.match(rgxPassword)
    }


    let ValidateForm=()=>{
        
        if(FirstName.value === ''){
            SetError(FirstName ,"First Name is required" );
        }
        else{
            SetSuccess(FirstName);
        }

        if(LastName.value === ''){
            SetError(LastName, 'last Name is required');
        }
        else{
            SetSuccess(LastName);
        }
        if(Email.value === ''){
            SetError(Email, 'Email is required');
        }
        else  if(!EmailValidation(Email.value)){
            SetError(Email, 'Email not matching');
        }
        else{
            SetSuccess(Email);
        }
        if(UPassword.value === ''){
            SetError(UPassword, 'Password is required');
        }
        else if(!PassValidation(UPassword.value)){
            SetError(UPassword, 'password must contain minimum length 8 characters');
        }
        else{
            SetSuccess(UPassword);
        }
        if(Days.value === ''){
            SetError(Days, 'Day is required');
        }
        else{
            SetSuccess(Days);
        }
        if(Months.value === ''){
            SetError(Months, 'Month is required');
        }
        else{
            SetSuccess(Months);
        }
        if(years.value === ''){
            SetError(years, 'Year is required');
        }
        else{
            SetSuccess(years);
        }
        if(gender.value === ''){
            SetError(gender, 'Gender is required');
        }
        else{
            SetSuccess(gender);
        }

      
    }

//    if form valid set value in local storage
    registerBtn?.addEventListener("click", (e) =>{
                e.preventDefault();
                ValidateForm();
                let form = document.getElementById("registration-form");
                let users = JSON.parse(localStorage.getItem("userInfo")) || []
                if(form.checkValidity()) {
                    let userinfo = {
                        Fname:FirstName.value,
                        Email:Email.value,
                        Password:UPassword.value,
                    }
                    users.push(userinfo);
                    localStorage.setItem("userInfo",JSON.stringify(users)) 
                    window.location.href = "main.html"
                    }
                
            })


// login function 
let userEmail = document.getElementById('userEmail');
let userPassword = document.getElementById('userPassword');
let loginBtn = document.getElementById('login');
let loginForm = document.getElementById('login-form');

function loginValidation(){
    if(userEmail.value === ''){
        SetError(userEmail, 'Email is required');
    }
    else if(!EmailValidation(userEmail.value)){
        SetError(Email, 'Email not matching');
    }
    else{
        SetSuccess(userEmail);
    }
    if(userPassword.value === ''){
        SetError(userPassword, 'Password is required');
    }
    else{
        SetSuccess(userPassword);
    }

 }

loginBtn?.addEventListener("click", function(r) {
  r.preventDefault();
    //? validation for email and password
    loginValidation();
         users = JSON.parse(localStorage.getItem("userInfo")) || [];
        const matchedUser = users.find(user => user.Email === userEmail.value && user.Password === userPassword.value);
        if (matchedUser) {
                window.location.href = "main.html"
        } 
        else{
            SetError(formVal, 'Email Or  Password Not Match');
            SetError(userPassword, 'Password Not matched');
            SetError(Email, 'Email not matching');
            SetError(UPassword,"password not match");
        }
   
  

});



//? full days in selection

for(let i=1;i<=31;i++){
    Days.innerHTML +=`<option value="${i}">${i}</option>`
}

//? full months in selection
for(let i=1;i<=12;i++){
    Months.innerHTML +=`<option value="${i}">${i}</option>`
}
//? full years in selection
for(let i=1915;i<=2023;i++){
    years.innerHTML +=`<option value="${i}">${i}</option>`
}
    


       
        