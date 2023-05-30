const buttons = document.querySelectorAll('.product-list__range-button');

let subPrice = document.querySelector('.calculation-list__subtotal-number');

const tax = document.querySelector('.calculation-list__tax-number');

const shipping = document.querySelector('.calculation-list__shipping-number');

let total = document.querySelector('.calculation-list__total-number');

const cancelButtons = document.querySelectorAll('.product-list__button');

const list = document.querySelector('.product-list');

const quantity = document.querySelector('.page-header__basket-sup-icon-quantity');



const onButtonClick = (event) => {
  event.preventDefault();
  let subPriceValue = 0;
  const parent = event.target.closest('.product-list__product-card');
  const input = parent.querySelector('input');
  const price = parent.querySelector('.product-list__number');

if(event.target.classList.contains('product-list__range-button--positive')) {
  input.value = Number(input.value) + 1;
  price.textContent = Number(price.dataset.price)* Number(input.value);
} else {
  if(input.value <= 1) {
    input.value = input.dataset.input;
    price.textContent= price.dataset.price;
  } else {
    input.value = Number(input.value) - 1;
    price.textContent = Number(price.textContent) - Number(price.dataset.price);
  }
}
document.querySelectorAll('.product-list__number').forEach((elem) => {
  subPriceValue += Number(elem.textContent);
})
subPrice.textContent  = subPriceValue;
total.textContent = Number(subPrice.textContent) + Number(tax.textContent) + Number(shipping.textContent);
}

const onCancelButtonClick = (event) => {
  const parent = event.target.closest('.product-list__product-card');
  parent.remove();

  quantity.textContent -= 1;

  let subPriceValue = 0;
  document.querySelectorAll('.product-list__number').forEach((elem) => {
    subPriceValue += Number(elem.textContent);
  });
  subPrice.textContent  = subPriceValue;
  total.textContent = Number(subPrice.textContent) + Number(tax.textContent) + Number(shipping.textContent);

  if (!list.hasChildNodes()) {
const message = document.querySelector('.product-list__my-basket-link');
message.style.display = 'block';
tax.textContent = '0';
shipping.textContent = '0';
total.textContent = Number(subPrice.textContent) + Number(tax.textContent) + Number(shipping.textContent);
}
}

buttons.forEach((button) => {
  button.addEventListener('click', onButtonClick);
});

cancelButtons.forEach((cancelButton) => {
  cancelButton.addEventListener('click', onCancelButtonClick);
});
