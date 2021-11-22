function validateForm() {
    const carIdInput = document.getElementById('carId');
    const clientIdInput = document.getElementById('clientId');
    const rentPriceInput = document.getElementById('rentPrice');
    const dateFromInput = document.getElementById('dateFrom');
    const dateToInput = document.getElementById('dateTo');
    const form = document.getElementById('form');

    const errorCarIdInput = document.getElementById('errorCarId');
    const errorClientIdInput = document.getElementById('errorClientId');
    const errorRentPriceInput = document.getElementById('errorRentPrice');
    const errorDateFromInput = document.getElementById('errorDateFrom');
    const errorDateToInput = document.getElementById('errorDataTo');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([carIdInput, clientIdInput, rentPriceInput, dateFromInput, dateToInput], [errorCarIdInput, errorClientIdInput, errorRentPriceInput, errorDateFromInput, errorDateToInput], errorsSummary);
    
    let valid = true;

    if (!checkRequired(carIdInput.value)) {
        valid = false;
        carIdInput.classList.add("error-input");
        errorCarIdInput.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(clientIdInput.value)) {
        valid = false;
        clientIdInput.classList.add("error-input");
        errorClientIdInput.innerText = "Pole jest wymagane";
    }

    if (!checkRequired(rentPriceInput.value)) {
        valid = false;
        rentPriceInput.classList.add("error-input");
        errorRentPriceInput.innerText = "Wprowadź cenę wynajmu";
    } else if (!checkNumber(rentPriceInput.value)) {
        valid = false;
        rentPriceInput.classList.add("error-input");
        errorRentPriceInput.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(rentPriceInput.value, 0, 1_500)) {
        valid = false;
        rentPriceInput.classList.add("error-input");
        errorRentPriceInput.innerText = "Pole cena wynajmu powinno być liczbą w zakresie od 0 do 1500";
    }

    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    const nowString = [year, month, day].join('-');

    if(!checkRequired(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFromInput.innerText = "Pole jest wymagane";
    } else if (!checkDate(dateFromInput.value)) {
        valid = false;
        dateFromInput.classList.add("error-input");
        errorDateFromInput.innerText = "Pole powinno zawierać datę w formacie yyyy-MM-dd (np. 2000-01-01)";
    } else if (checkRequired(dateToInput.value) && checkDate(dateToInput.value)
    && !checkDateIfAfter(dateToInput.value, dateFromInput.value)) {
        valid = false;
        dateToInput.classList.add("error-input");
        errorDateToInput.innerText = "Data do powinna być późniejsza niż data od";
    }

    form.addEventListener('submit',function(event){
        event.preventDefault();
    })

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
    return valid;
}