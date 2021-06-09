// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quant = product.querySelector('input');
  //const quant2 = product.getElementsByClassName('product2');
  const subtotal = product.querySelector('.subtotal span');

  let quantidade = quant.value;

  let preco = price.innerText;
  let sub = quantidade * preco;
  subtotal.innerText = sub;

  return sub;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const mutiProduct = document.getElementsByClassName('product');

  let soma = 0;
  for (i = 0; i < mutiProduct.length; i++) {
    soma += updateSubtotal(mutiProduct[i]);
  }

  console.log(soma);
  return soma;

  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
