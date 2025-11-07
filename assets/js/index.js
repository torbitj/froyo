// Take user order through prompt
const order = prompt(`What flavors of ice cream would you like to order?`);
// Turn prompt into an array
const orderItems = order.split(`,`);

const itemCount = (itemsArray) => {
  const orderCount = {};

  for (let i = 0; i < itemsArray.length; i++) {
    const currentItem = itemsArray[i];
    if (Object.keys(orderCount).length === 0) {
      orderCount[currentItem] = 1;
    }
    else {
      for (item in orderCount) {
        if (currentItem === item) {
          let currentItemCount = orderCount[item];
          currentItemCount += 1;
          orderCount[item] = currentItemCount;
        }
        else {
          orderCount[currentItem] = 1;
        }
      }
    }
  }
  return orderCount;
}

