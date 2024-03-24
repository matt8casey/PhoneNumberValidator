let userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');
const checkBtn = document.getElementById('check-btn');
const results1 = document.getElementById('return1');
const results2 = document.getElementById('return2');
const results3 = document.getElementById('return3');
let array = [];

const checkIfValid = input => {
    if (input === '') {
        alert('Please provide a phone number');
    }
}


checkBtn.addEventListener('click', () => {
    checkIfValid(userInput.value);
    userInput.value = "";
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkIfValid(userInput.value);
      userInput.value = '';
    }
  })

  const countryCode = '^(1\\s)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  )
