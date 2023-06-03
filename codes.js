const cardName = document.querySelector('.front-card-name');
const cardNameInput = document.querySelector('.cardholder-name');

const cardNumber = document.querySelector('.front-card-number');
const cardNumberInput = document.querySelector('.cardholder-number');

const cardCvc = document.querySelector('.cvc-num');
const cardCvcInput = document.querySelector('.card-cvc-input');

const cardMonth = document.querySelector('.front-card-month');
const cardMonthInput = document.querySelector('.card-month-input');

const cardYear = document.querySelector('.front-card-year');
const cardYearInput = document.querySelector('.card-year-input');

const confirmButtonElem = document.querySelector('.confirm-button');
const continueButtonElem = document.querySelector('.continue-button');


function nameInput(event){
  cardName.textContent = event.target.value.toUpperCase();
}
function numberInput(event){
  cardNumber.textContent = format(event.target.value);
}
function cvcInput(event){
  cardCvc.textContent = event.target.value;
}
function monthInput(event){
  cardMonth.textContent = event.target.value;
}
function yearInput(event){
  cardYear.textContent = event.target.value;
}
cardNameInput.addEventListener('keyup', nameInput);
cardNumberInput.addEventListener('keyup', numberInput);
cardCvcInput.addEventListener('keyup', cvcInput);
cardMonthInput.addEventListener('keyup', monthInput);
cardYearInput.addEventListener('keyup', yearInput);

function buttonConfirm(event){
  event.preventDefault();
  let cardname;
  let cardnumber;
  let cardmonth;
  let cardyear;
  let cardcvc;
  if(!cardNameInput.value){
    cardNameInput.classList.add('error');
    cardname=false;
    document.querySelector('.name-error').textContent = "can't be blank";
  }else{
    if(/\d/g.test(cardNameInput.value)){
      cardname=false;
      document.querySelector('.name-error').textContent = "can't contain digits";
      if(!cardNameInput.classList.contains('error')){
        cardNameInput.classList.add('error');
      }
    }else{
      if(cardNameInput.classList.contains('error')){
        cardNameInput.classList.remove('error');
        cardname = true;
        document.querySelector('.name-error').textContent ="";
      }else{
        cardname = true;
        document.querySelector('.name-error').textContent ="";
      }
    }
  }
  if(!cardNumberInput.value){
    cardNumberInput.classList.add('error');
    cardnumber=false;
    document.querySelector('.number-error').textContent = "can't be blank";
  }else{
    if(cardNumberInput.value.length<16){
      document.querySelector('.number-error').textContent = "enter 16 digits";
      cardnumber=false;
      if(!cardNumberInput.classList.contains('error')){
        cardNumberInput.classList.add('error');
      }
    }else{
      document.querySelector('.number-error').textContent = "";
      cardnumber=true;
      if(cardNumberInput.classList.contains('error')){
        cardNumberInput.classList.remove('error');
      }
    }
  }
  if(!cardMonthInput.value){
    cardMonthInput.classList.add('error');
    cardmonth=false;
    document.querySelector('.month-error').textContent = "can't be blank";
  }else{
    if(cardMonthInput.value.length<2){
      document.querySelector('.month-error').textContent = "enter 2 digits";
      cardmonth=false;
      if(!cardMonthInput.classList.contains('error')){
        cardMonthInput.classList.add('error');
      }
    }else{
      if(Number(cardMonthInput.value)>12 || Number(cardMonthInput.value)<1){
        cardmonth = false;
        document.querySelector('.month-error').textContent = "enter valid month";
        if(!cardMonthInput.classList.contains('error')){
          cardMonthInput.classList.add('error');
        }
      }else{
        cardmonth=true;
        document.querySelector('.month-error').textContent = "";
        if(cardMonthInput.classList.contains('error')){
          cardMonthInput.classList.remove('error');
        }
      }
    }
  }
  if(!cardYearInput.value){
    cardYearInput.classList.add('error');
    cardyear=false;
    document.querySelector('.year-error').textContent = "can't be blank";
  }else{
    if(cardYearInput.value.length<2){
      document.querySelector('.year-error').textContent = "enter 2 digits";
      cardyear=false;
      if(!cardYearInput.classList.contains('error')){
        cardYearInput.classList.add('error');
      }
    }else{
      cardyear=true;
      document.querySelector('.year-error').textContent = "";
      if(cardYearInput.classList.contains('error')){
        cardYearInput.classList.remove('error');
      }
    }
  }
  if(!cardCvcInput.value){
    cardCvcInput.classList.add('error');
    cardcvc=false;
    document.querySelector('.cvc-error').textContent = "can't be blank";
  }else{
    if(cardCvcInput.value.length<3){
      document.querySelector('.cvc-error').textContent = "enter 3 digits";
      cardcvc=false;
      if(!cardCvcInput.classList.contains('error')){
        cardCvcInput.classList.add('error');
      }
    }else{
      cardcvc=true;
      document.querySelector('.cvc-error').textContent = "";
      if(cardCvcInput.classList.contains('error')){
        cardCvcInput.classList.remove('error');
      }
    }
  }
  if(cardname&&cardcvc&&cardnumber&&cardmonth&&cardyear){
    document.querySelector('.form-section').classList.add('hidden');
    document.querySelector('.thanks').classList.remove('hidden');
  }
}

confirmButtonElem.addEventListener('click',buttonConfirm);

function buttonContinue(event){
  event.preventDefault();
  cardName.textContent = 'JANE APPLESEED';
  cardNumber.textContent = '0000 0000 0000 0000';
  cardMonth.textContent = '00';
  cardYear.textContent = '00';
  cardCvc.textContent = '000';
  cardNameInput.value = '';
  cardNumberInput.value = '';
  cardMonthInput.value = '';
  cardYearInput.value = '';
  cardCvcInput.value = '';
  document.querySelector('.form-section').classList.remove('hidden');
  document.querySelector('.thanks').classList.add('hidden');
}

continueButtonElem.addEventListener('click',buttonContinue);

function format(para){
  return para.toString().replace(/\d{4}(?=.)/g,"$& ");
}
