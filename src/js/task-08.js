const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

 function onFormSubmit (event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    
    if (formElements.password.value === "" || formElements.email.value === "") {
        alert('Всі поля форми повинні бути заповнені');
    }
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formElementsObject = {email, password,};
    console.log(formElementsObject);
    event.currentTarget.reset(); 
};

