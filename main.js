
const incomeSalary = document.getElementById('income-salary'),
incomeFreelance = document.getElementById('income-freelance'),
incomeExtra1 = document.getElementById('income-extra-1'),
incomeExtra2 = document.getElementById('income-extra-2');

const costsFlat = document.getElementById('costs-flat'),
costsHouseServices = document.getElementById('costs-house-services'),
costsTransport = document.getElementById('costs-transport'),
costsCredit = document.getElementById('costs-credit');

const totalMounthInput = document.getElementById('total-month'),
totalDayInput = document.getElementById('total-day'),
totalYearInput = document.getElementById('total-year');



let totalMounth, totalDay, totalYear;


const moneyBoxRange = document.getElementById('money-box-range'),
accumulationInput = document.getElementById('accumulation'),
spend = document.getElementById('spend');

let accumulation = 0;
let totalPresents = 0;

const inputs = document.querySelectorAll('.input');
for(input of inputs) {
input.addEventListener('input', () => {
countingAvailableMoney();  
calculationPrecents(); 
})
}

const strToNum = str => str.value ? parseInt(str.value) : 0

const countingAvailableMoney = () => {
const totalPerMounth = strToNum(incomeSalary) + strToNum(incomeFreelance) + strToNum(incomeExtra1) + strToNum(incomeExtra2);
const totalCosts = strToNum(costsFlat) + strToNum(costsHouseServices) + strToNum(costsTransport) + strToNum(costsCredit);

totalMounth = totalPerMounth - totalCosts;
totalMounthInput.value = totalMounth;
}

moneyBoxRange.addEventListener('input', e => {
const totalPercentEl = document.getElementById('total-precents');
totalPresents = e.target.value;
totalPercentEl.innerHTML = totalPresents;
calculationPrecents();
});

const calculationPrecents = () => {
accumulation = ((totalMounth * totalPresents) / 100).toFixed();
accumulationInput.value = accumulation;

spend.value = totalMounth - accumulation;

totalDay = (spend.value / 30).toFixed();
totalDayInput.value = totalDay;

totalYear = accumulation * 12;
totalYearInput.value = totalYear;
}