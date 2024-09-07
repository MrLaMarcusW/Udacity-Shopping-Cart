const products = [
  { 
    name : "Cherry", 
    price : 5.00, 
    quantity : 0, 
    productId : 1, 
    image : "/starter/src/images/cherry.jpg" 
  },
  { 
    name : "Orange",  
    price : 3.50, 
    quantity : 0, 
    productId : 2, 
    image : "/starter/src/images/orange.jpg" },
  { 
    name : "Strawberry", 
    price : 2.00, 
    quantity : 0,  
    productId : 3, 
    image : "/starter/src/images/strawberry.jpg" 
  }
];

const cart = [];

// This function takes in the productId as an argument and gets the correct product based on the productId
function findProduct(productId, productList) {
  return productList.find(function(product) { 
    return  product.productId === productId
  });
}

function addProductToCart(productId) {

// This function uses a helper function to find matching product ID then adds item to cart
  let product = findProduct(productId, products)

// If the product is not already in the cart, add it to the cart
  if (!cart.includes(product)) {
    cart.push(product)
  }
  increaseQuantity(productId)
}

// This function uses a helper function to find matching product ID
function increaseQuantity(productId) {

// Then increases quantity of that product in the cart
  let product = findProduct(productId, cart)
  product.quantity = product.quantity + 1;
}

// This function uses a helper function to find matching product ID
function decreaseQuantity(productId) {

// Then decreases the quantity of the product in the cart
  let product = findProduct(productId, cart)
  product.quantity = product.quantity - 1;
  // If the product quantity is 0 then the product is removed from the cart
  if (product.quantity === 0) {
    product.quantity = 0
    cart.splice(product.name,1)
  }
}

// This function uses a helper function to find matching product ID
function removeProductFromCart(productId) {

// Then removes the item from the cart
  let product = findProduct(productId, cart) 
  product.quantity = 0
  cart.splice(product.name,1) 
       
}

// This function iterates through the cart to get the total cost of all products
function cartTotal() {
  let totalCost = 0;

// Multiplies the product price and quantity of each product in cart and combines the totals
  for (let i =0; i < cart.length; i++) {
    totalCost = totalCost + (cart[i].quantity * cart[i].price);
  }
  // Returns total cost for all items combined
  return totalCost;
}

// This function empties all products from the cart
function emptyCart() {
  cart.splice(0, cart.length); //empty everything from cart
}

let totalPaid = 0;

// This function takes in the amount of money paid by customer
function pay(amount) {
  totalPaid = totalPaid + amount;
  let remainingBalance = totalPaid - cartTotal();

// If remainingBalance is equal to or greater than zero prompt for additional payment
  if (remainingBalance >= 0) {
    totalPaid = 0;
    emptyCart();
  }
   return remainingBalance;
}

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}