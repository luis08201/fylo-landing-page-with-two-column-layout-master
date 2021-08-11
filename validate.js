const email = document.getElementById("email");

email.addEventListener('input',()=>{
  const emailBox = document.querySelector('.emailBox');
  const emailText = document.querySelector('.emailText');
  const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
  const active = document.getElementById('email')

  if(email.value.match(emailPattern)){
    emailBox.classList.add('valid');
    emailBox.classList.remove('invalid');
    emailText.innerHTML = "Your email Address is valid"
    active.style.border="2px solid #4f7df3"
}else{
    emailBox.classList.add('invalid');
    emailBox.classList.remove('valid');
    emailText.innerHTML = "Please provide a valid email address"
    active.style.border="2px solid #ff5263"
}
})

const email1 = document.getElementById("email1");

email1.addEventListener('input',()=>{
  const emailBox1 = document.querySelector('.emailBox1');
  const emailText1 = document.querySelector('.emailText1');
  const emailPattern1 = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
  const active = document.getElementById('email1')

  if(email1.value.match(emailPattern1)){
    emailBox1.classList.add('valid');
    emailBox1.classList.remove('invalid');
    emailText1.innerHTML = "Your email Address is valid"
    active.style.border="2px solid #4f7df3"
}else{
    emailBox1.classList.add('invalid');
    emailBox1.classList.remove('valid');
    emailText1.innerHTML = "Please provide a valid email address"
    active.style.border="2px solid #ff5263"
}
})