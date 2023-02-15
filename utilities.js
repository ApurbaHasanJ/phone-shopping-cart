// Calculate subTotal

function getTextElementValueById(elementId){
    const totalPhoneElement = document.getElementById(elementId);
    const currentPhoneTotalString = totalPhoneElement.innerText;
    const currentPhoneTotal = parseFloat(currentPhoneTotalString);
    return currentPhoneTotal;


}

function setTextElementValueById(elementId , value){

    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('total-phone-price');
    const currentCaseTotal = getTextElementValueById('total-case-price');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal)
    

    // Calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax', taxAmount);

    // final amount
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-amount', finalAmount)

}

