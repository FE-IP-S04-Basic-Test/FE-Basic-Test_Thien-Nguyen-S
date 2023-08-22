class Cart {
  constructor(item) {
    this.item = [];
    this.getCart();
  }

  addItem = (product, ice, sugar, quantity) => {
    const check = this.item.find(
      (item) =>
        item.product.idProduct === product.idProduct &&
        item.ice.idIce === ice.idIce &&
        item.sugar.idSugar === sugar.idSugar
    );

    if (check) {
      check.quantity += quantity;
    } else {
      this.item.push({ product, ice, sugar, quantity });
    }
    this.saveCart();
  };

  getCart = () => {
    this.item = JSON.parse(localStorage.getItem('cart')) || [];
  };

  saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(this.item));
  };
}

export default Cart;
