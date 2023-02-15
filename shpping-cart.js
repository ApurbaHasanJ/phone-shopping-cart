// function for phone
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseFloat(phoneNumberString);

    let newPhoneNumber;

    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }

    else{
        newPhoneNumber = previousPhoneNumber - 1;
        
    }

    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhonePrice(newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 1219;
    const totalPhoneElement = document.getElementById('total-phone-price')
    totalPhoneElement.innerText = totalPhonePrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhonePrice(newPhoneNumber);

    calculateSubTotal()


});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhonePrice(newPhoneNumber);

    calculateSubTotal()
});



// function for phone case

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
        newCaseNumber = previousCaseNumber + 1;
    }

    else{
        newCaseNumber = previousCaseNumber - 1;
        
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
    // console.log(newCaseNumber)
}


function updateCasePrice(newCaseNumber){
    const totalCasePrice = newCaseNumber * 59;
    const totalCaseElement = document.getElementById('total-case-price');
    totalCaseElement.innerText = totalCasePrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);

    calculateSubTotal()

});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);

    calculateSubTotal()

});

