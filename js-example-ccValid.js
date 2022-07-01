document.getElementById('cc-submit').addEventListener('click', validateCreditCard);

function validateCreditCard() {
    // Get the Input
    const arrayInput = document.getElementById("cc-input").value.split('');

    // Set up the Array
    const lastDigit = Number(arrayInput[arrayInput.length-1]);

    // Remove Last Element, reverse array
    arrayInput.pop();
    arrayInput.reverse();

    // Double the Odd places
    for(let i = 0; i < arrayInput.length; i ++) {
        if(i % 2 != 0) {
            arrayInput[i] = Number(arrayInput[i]);
        } else {
            let newNum = Number(arrayInput[i]) * 2;
            if(newNum <= 9) {
                arrayInput[i] = newNum;
            } else {
                arrayInput[i] = newNum - 9;
            }
        }
    }

    // Get the Total
    let total = 0;
    arrayInput.forEach(arrayNum => total += arrayNum);

    // Check if Valid
    let modAmount = total + lastDigit;

    if(modAmount % 10 == 0) {
        document.getElementById("cc-output").innerHTML = "VALID";
    } else {
        document.getElementById("cc-output").innerHTML = "NOT VALID";
    }
}

