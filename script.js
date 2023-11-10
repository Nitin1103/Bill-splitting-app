const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberofPeople = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

// Get number of people from number of people div
let noOfPpl = Number(numberofPeople.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
    let bill = Number(billTotalInput.value);
    let tipPercent = Number((tipInput.value) / 100);
    let tipAmount = bill * tipPercent;
    let totalBill = bill + tipAmount;
    let pptotal = totalBill / noOfPpl;
    pptotal = pptotal.toFixed(2);
    perPersonTotal.innerText = '$' + pptotal;
}

// ** Splits the bill between more people **
const increasePeople = () => {
    noOfPpl++;
    numberofPeople.innerText = noOfPpl;
    calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    if (noOfPpl <= 1) return;
    noOfPpl--;
    numberofPeople.innerText = noOfPpl;
    calculateBill();
}