function validatePhoneNumber() {
    // Get the input value
    var phoneNumber = document.getElementById('telephoneInput').value;

    // Regular expression to match a valid phone number
    var phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;

    // Check if the input matches the pattern
    if (phoneNumberPattern.test(phoneNumber)) {
        document.getElementById('result').innerHTML = `<p class="return">Valid US number:  ${phoneNumber}</p>`;
    } else {
        document.getElementById('result').innerHTML = `<p class="return">Please provide a phone number</p>`;
    }
}

function clearContent() {
    // Get the div element by its id
    var divElement = document.getElementById('result');

    // Clear the innerHTML of the div
    divElement.innerHTML = '';
}