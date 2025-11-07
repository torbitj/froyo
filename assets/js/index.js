// Take user order through prompt
const order = prompt(`What flavors of ice cream would you like to order?`);
// Turn prompt into an array
const orderItems = order.split(`,`);

const itemCount = (itemsArray) => {
  const orderCount = {};

  for (let i = 0; i < itemsArray.length; i++) {
    const currentItem = itemsArray[i];
    for (item in orderCount) {
      if (currentItem === item) {
        orderCount[item] += 1;
      }
      else {
        orderCount.item = 0;
      }
    }
  }
  
}