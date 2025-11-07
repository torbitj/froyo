/**
 * Check if key already exists in an object
 * @param {object} object 
 * @param {string} keyRef 
 * @returns 
 */
const keyChecker = (object, keyRef) => {
  let isKey = false;
  for (key in object) {
    if (key === keyRef) {
      isKey = true;
      return isKey;
    }
  }
  return isKey;
}

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
    const currentFlavor = itemsArray[i];
    // Determine if the object is empty
    if (Object.keys(orderCount).length === 0) {
      orderCount[currentFlavor] = 1;
    }
    // If not empty, check keys and values
    else {
      // Check if current flavor is already a key
      const isCurrentFlavor = keyChecker(orderCount, currentFlavor);
      // Increase flavor value if already a key or create new key value
      // pairing in the object
      if (isCurrentFlavor === true) {
        let currentFlavorCount = orderCount[currentFlavor];
        currentFlavorCount += 1;
        orderCount[currentFlavor] = currentFlavorCount;
      } else {
        orderCount[currentFlavor] = 1;
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

/**
 * Main method that takes in a user prompt and logs the user input
 * in the console
 */
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

// Call main method
main();