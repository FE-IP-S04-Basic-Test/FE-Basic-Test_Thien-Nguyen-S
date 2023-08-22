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
  for (const a of arrB) {
    for (const b of arrA) {
      if (a.id === b.id) {
        const id = a.id;
        const quantity = a.quantity + b.quantity;
        const check = result.find((i) => i.id === a.id);
        if (!check) {
          result.push({ id, quantity });
        } else {
          check.quantity += b.quantity;
        }
      }
    }
  }
};

const arrA = [
  { id: '1', quantity: 2 },
  { id: '2', quantity: 2 },
  { id: '3', quantity: 3 },
  { id: '1', quantity: 3 }
];

const arrB = [
  { id: '1', quantity: 2 },
  { id: '3', quantity: 2 }
];

console.log(twoArrayOfProduct(arrA, arrB));
