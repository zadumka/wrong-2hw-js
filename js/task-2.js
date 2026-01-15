'use strict';


function getShippingMessage(country, price, deliveryFee) {
const totalPrice = price;
return `Shipping to ${country} will cost ${totalPrice} credits`;
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage(80, "Germany", 20));
console.log(getShippingMessage("Sweden", 100, 20));
