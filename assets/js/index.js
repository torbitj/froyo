/**
 * Take in an array, count like names and create object of
 * names as keys and values as the counts
 * @param {array} itemsArray 
 * @returns Object
 */
const itemCount = (itemsArray) => {
  // Create an empty object
  const orderCount = {};

  // Loop through the array
  for (let i = 0; i < itemsArray.length; i++) {
    // Store current item in array
    const currentItem = itemsArray[i];
    // Determine if the object is empty
    if (Object.keys(orderCount).length === 0) {
      orderCount[currentItem] = 1;
    }
    // If not empty, check keys and values
    else {
      // Loop through the keys
      for (item in orderCount) {
        // Check if the current item in array matches a key
        // If it does, increase value for that key
        if (currentItem === item) {
          let currentItemCount = orderCount[item];
          currentItemCount += 1;
          orderCount[item] = currentItemCount;
        }
        // If item does not match, create new key and set value to 1
        else {
          orderCount[currentItem] = 1;
        }
      }
    }
  }
  // Return the order object
  return orderCount;
}

/**
 * Display order details of an order objext
 * @param {object} orderObj 
 */
const displayOrderDetails = (orderObj) => {
  // Log initial message
  console.log(`See your order details below:`);
  // Loop through object
  for (flavor in orderObj) {
    // Assign key names and flavor count to variables
    const flavorName = flavor;
    const numOfFlavor = orderObj[flavor];
    // Log current flavor and count
    console.log(`${flavorName}:  ${numOfFlavor}`);
  }
}

const main = () => {
  // Take user order through prompt
  const order = prompt(`What flavors of ice cream would you like to order?`);
  // Turn prompt into an array
  const orderItems = order.split(`,`);
  // Turn input into object with item counts as values
  const orderObject = itemCount(orderItems);
  // Display order details in the console
  displayOrderDetails(orderObject);
}

main();