function validateForm() {
    const vinInput = document.getElementById('vin');
    const plateNumberInput = document.getElementById('plateNumber');
    const companyInput = document.getElementById('company');
    const modelInput = document.getElementById('model');
    const oddometerInput = document.getElementById('oddometer');
    const vehiclePriceInput = document.getElementById('vehiclePrice');
    const form = document.getElementById('form');


    const errorVinInput = document.getElementById('errorVin');
    const errorPlateNumberInput = document.getElementById('errorPlateNumber');
    const errorCompanyInput = document.getElementById('errorCompany');
    const errorModelInput = document.getElementById('errorModel');
    const errorOddometerInput = document.getElementById('errorOddometer');
    const errorVehiclePriceInput = document.getElementById('errorVehiclePrice');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([vinInput, plateNumberInput, companyInput, modelInput, oddometerInput, vehiclePriceInput], [errorVinInput, errorPlateNumberInput, errorCompanyInput, errorModelInput, errorOddometerInput, errorVehiclePriceInput], errorsSummary);
    
    let valid = true;

    if (!checkRequired(vinInput.value)) {
        valid = false;
        vinInput.classList.add("error-input");
        errorVinInput.innerText = "Wprowadź VIN w prawidłowym formacie";
    } else if (!checkTextLengthRange(vinInput.value, 17)) {
        valid = false;
        vinInput.classList.add("error-input");
        errorVinInput.innerText = "Pole VIN powinno zawierać 17 znaków";
    }

    if (!checkRequired(plateNumberInput.value)) {
        valid = false;
        plateNumberInput.classList.add("error-input");
        errorPlateNumberInput.innerText = "Wprowadź nr. rejestracyjny w prawidłowym formacie";
    } else if (!checkTextLengthRange(plateNumberInput.value, 4, 7)) {
        valid = false;
        plateNumberInput.classList.add("error-input");
        errorPlateNumberInput.innerText = "Pole nr. rejestracyjny powinno zawierać 4-7 znaków";
    }

    if (!checkRequired(companyInput.value)) {
        valid = false;
        companyInput.classList.add("error-input");
        errorCompanyInput.innerText = "Wprowadź firmę pojazdu w prawidłowym formacie";
    } else if (!checkTextLengthRange(companyInput.value, 2, 60)) {
        valid = false;
        companyInput.classList.add("error-input");
        errorCompanyInput.innerText = "Pole marka powinno zawierać od 2 do 60 znaków";
    }

    if (!checkRequired(modelInput.value)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModelInput.innerText = "Wprowadź model pojazdu w prawidłowym formacie";
    } else if (!checkTextLengthRange(modelInput.value, 1, 60)) {
        valid = false;
        modelInput.classList.add("error-input");
        errorModelInput.innerText = "Pole model powinno zawierać od 1 do 60 znaków";
    }

    if (!checkRequired(oddometerInput.value)) {
        valid = false;
        oddometerInput.classList.add("error-input");
        errorOddometerInput.innerText = "Wprowadź przebieg pojazdu";
    } else if (!checkNumber(oddometerInput.value)) {
        valid = false;
        oddometerInput.classList.add("error-input");
        errorOddometerInput.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(oddometerInput.value, 0, 1_500_000)) {
        valid = false;
        oddometerInput.classList.add("error-input");
        errorOddometerInput.innerText = "Pole przebieg powinno być liczbą w zakresie od 0 do 1500000";
    }

    if (!checkRequired(vehiclePriceInput.value)) {
        valid = false;
        vehiclePriceInput.classList.add("error-input");
        errorVehiclePriceInput.innerText = "Wprowadź cenę pojazdu";
    } else if (!checkNumber(vehiclePriceInput.value)) {
        valid = false;
        vehiclePriceInput.classList.add("error-input");
        errorVehiclePriceInput.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(vehiclePriceInput.value, 0, 2_000_000)) {
        valid = false;
        vehiclePriceInput.classList.add("error-input");
        errorVehiclePriceInput.innerText = "Pole cena powinno być liczbą w zakresie od 0 do 2000000";
    }

    form.addEventListener('submit',function(event){
        event.preventDefault();
    })

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
    
    return valid;
}