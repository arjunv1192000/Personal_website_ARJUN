var nameError=document.getElementById('name-error');
var phoneError=document.getElementById('contact-error');
var emailError=document.getElementById('mail-error');
var messageError=document.getElementById('message-error');
var submitError=document.getElementById('sub-error');

function validateName(){

    var name=document.getElementById('contact-name').value;
    if(name.length==0){
    nameError.innerHTML ='Name is required';
    return false;
  }
  if(!name.match( /^[a-zA-Z]+ [a-zA-Z]+$/))
  {
    nameError.innerHTML ='Write full name';
    return false;
  }
  nameError.innerHTML ='<i class="fa-sharp fa-solid fa-circle-check"></i>';
  return true;
}
function validateNumber(){
    var phone=document.getElementById('contact-number').value;
    if(phone.length == 0){
        phoneError.innerHTML='Number is required';
        return false;
    }else
    if(phone.length<10 || phone.length>10){
        phoneError.innerHTML='phone number should be 10 digits';
    }else
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML='phone number is required';
        return false;

    }else{
    phoneError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
    }

}
function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML='email is required';
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
        emailError.innerHTML='invalid email';

    }else{
        emailError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
        return true;


    }
   
}
function validateMessage(){
    var message=document.getElementById('contact-message').value;
    var required=20;
    var left=required - message.length;

    if(left>0){
        messageError.innerHTML= left+ 'more character required';
        return false;
    }
    messageError.innerHTML=' <i class="fa-sharp fa-solid fa-circle-check"></i> ';
    return true;

}
function validateForm(){
    if( !validateName() || !validateNumber() || !validateEmail() || !validateMessage() )
    {
        submitError.style.display='block';
        submitError.innerHTML='fix the error';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
    else{
        submitError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
         return true;

    }
   
}


 