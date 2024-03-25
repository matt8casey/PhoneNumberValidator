let userInput = document.getElementById('user-input');
const clearBtn = document.getElementById('clear-btn');
const checkBtn = document.getElementById('check-btn');
const p = document.getElementsByClassName('return');
const div = document.getElementById('results-div');
let i = 0;

const checkIfValid = input => {
  if (input === '') {
      alert('Please provide a phone number');
      return
  }
  if (i > 2) {
    i = 0;
  }
  if (div.textContent == '') {
    div.innerHTML = `<p class="return" id="return1"></p>
    <p class="return" id="return2"></p>
    <p class="return" id="return3"></p>`
  }
  const results1 = document.getElementById('return1');
  const results2 = document.getElementById('return2');
  const results3 = document.getElementById('return3');
  const results = [results1, results2, results3];
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  )
  if (phoneRegex.test(input)){
    results[i].innerHTML = `Valid US number: ${userInput.value}`;
  }
  else {
    results[i].innerHTML = `Invalid US number: ${userInput.value}`;
  }
  i += 1;
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

clearBtn.addEventListener('click', () => {
  div.textContent = '';
})