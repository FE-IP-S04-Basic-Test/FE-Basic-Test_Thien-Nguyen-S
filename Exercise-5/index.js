import Cart from './Cart.js';
import Ice from './Ice.js';
import { ices, product, sugar } from './data.js';
import Product from './product.js';
import Sugar from './sugar.js';

let cart = new Cart();

const productData = product.map((prod) => new Product(prod));

const iceData = ices.map((ice) => new Ice(ice));

const sugarData = sugar.map((sug) => new Sugar(sug));

const handleAddtoCart = (product, ice, sugar, quantity) => {
  cart.addItem(product, ice, sugar, quantity);
};

handleAddtoCart(productData[0], iceData[2], sugarData[1], 1);
handleAddtoCart(productData[0], iceData[1], sugarData[1], 2);
handleAddtoCart(productData[1], iceData[2], sugarData[2], 1);

// Cau 2
const twoArrayOfProduct = (arrA, arrB) => {
  let result = [];
  for (const a of arrA) {
    for (const b of arrB) {
      if (b.id === a.id) {
        const check = result.find((i) => i.id === a.id);
        const id = a.id;
        const quantity = a.quantity + b.quantity;
        if (!check) {
          result.push({ id, quantity });
        } else {
          check.quantity += quantity;
        }
      }
    }
  }
  return result;
};

const twoArray = (arrA, arrB) => {
  const quantitiesArr1 = {};
  const quantitiesArr2 = {};
  let result = [];

  for (const value of arrA) {
    const id = value.id;
    const quantity = value.quantity;
    if (!quantitiesArr1[id]) {
      quantitiesArr1[id] = 0;
    }
    quantitiesArr1[id] += quantity;
  }

  console.log(quantitiesArr1);

  for (const value of arrB) {
    const id = value.id;
    const quantity = value.quantity;
    if (!quantitiesArr2[id]) {
      quantitiesArr2[id] = 0;
    }
    quantitiesArr2[id] += quantity;
  }

  console.log(quantitiesArr2);

  for (const key in quantitiesArr2) {
    if (quantitiesArr1[key]) {
      result.push({ id: key, quantity: quantitiesArr1[key] + quantitiesArr2[key] });
    } else {
      result.push({ id: key, quantity: 0 + quantitiesArr2[key] });
    }
  }

  console.log(result);
};

const arrA = [
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 0 },
  { id: '1', quantity: 3 }
];

const arrB = [
  { id: '1', quantity: 2 },
  { id: '3', quantity: 2 }
];

twoArray(arrA, arrB);

// console.log(twoArrayOfProduct(arrA, arrB));
