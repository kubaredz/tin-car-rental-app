function validateForm() {
    const drivingLicenseIdInput = document.getElementById('drivingLicenseId');
    const clientNameInput = document.getElementById('clientName');
    const clientSurnameInput = document.getElementById('clientSurname');
    const clientEmailInput = document.getElementById('clientEmail');
    const clientIsPatron = document.getElementById('patronChoice');
    const form = document.getElementById('form');

    const errorDrivingLicenseId = document.getElementById('errorDrivingLicenseId');
    const errorClientName = document.getElementById('errorClientName');
    const errorClientSurname = document.getElementById('errorClientSurname');
    const errorClientEmail = document.getElementById('errorClientEmail');
    const errorsSummary = document.getElementById('errorsSummary');
    
    resetErrors([drivingLicenseIdInput, clientNameInput, clientSurnameInput, clientEmailInput], [errorDrivingLicenseId, errorClientName, errorClientSurname, errorClientEmail], errorsSummary);
    
    let valid = true;

    if (!checkRequired(drivingLicenseIdInput.value)) {
        valid = false;
        drivingLicenseIdInput.classList.add("error-input");
        errorDrivingLicenseId.innerText = "Wprowadź nr. prawa jazdy w prawidłowym formacie";
    } else if (!checkTextLengthRange(drivingLicenseIdInput.value, 5)) {
        valid = false;
        drivingLicenseIdInput.classList.add("error-input");
        errorDrivingLicenseId.innerText = "Pole nr. prawa jazdy powinno posiadać 5 cyfr";
    }

    if (!checkRequired(clientNameInput.value)) {
        valid = false;
        clientNameInput.classList.add("error-input");
        errorClientName.innerText = "Wprowadź imię w prawidłowym formacie";
    } else if (!checkTextLengthRange(clientNameInput.value, 3, 60)) {
        valid = false;
        clientNameInput.classList.add("error-input");
        errorClientName.innerText = "Pole imię powinno zawierać od 3 do 60 znaków";
    }

    if (!checkRequired(clientSurnameInput.value)) {
        valid = false;
        clientSurnameInput.classList.add("error-input");
        errorClientSurname.innerText = "Wprowadź nazwisko w prawidłowym formacie";
    } else if (!checkTextLengthRange(clientSurnameInput.value, 3, 60)) {
        valid = false;
        clientSurnameInput.classList.add("error-input");
        errorClientSurname.innerText = "Pole nazwisko powinno zawierać od 3 do 60 znaków";
    }

    if (!checkRequired(clientEmailInput.value)) {
        valid = false;
        clientEmailInput.classList.add("error-input");
        errorClientEmail.innerText = "Wprowadź email w prawidłowej formie";
    } else if (!checkTextLengthRange(clientEmailInput.value, 5, 60)) {
        valid = false;
        clientEmailInput.classList.add("error-input");
        errorClientEmail.innerText = "Pole powinno zawierać od 5 do 60 znaków";
    } else if (!checkEmail(clientEmailInput.value)) {
        valid = false;
        clientEmailInput.classList.add("error-input");
        errorClientEmail.innerText = "Pole powinno zawierać prawidłowy adres email";
    }

    if(!checkRequired())
    var gen = document.forms["form"]["patronChoice"];
    if(gen[0].checked==false&&gen[1].checked==false) {
        alert("Wybierz czy stały klient");
    }

    form.addEventListener('submit',function(event){
        event.preventDefault();
    })

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
    return valid;
}