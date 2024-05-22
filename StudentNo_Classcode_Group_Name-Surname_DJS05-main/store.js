/**
 * Class representing a Store.
 */
export class Store {
  /**
   * Create a store.
   */
  constructor() {
    this.selectedItem = null;
    this.itemQuantity = 0;
  }

  /**
   * Open the store.
   * Logs a message indicating the store is opened.
   */
  openStore() {
    console.log("Store is opened.");
  }

  /**
   * Select an item in the store.
   * @param {string} item - The name of the item to select.
   */
  selectItem(item) {
    this.selectedItem = item;
    console.log(`Selected item: ${item}`);
  }

  /**
   * Increment the quantity of the selected item.
   * Logs the new quantity.
   */
  incrementQuantity() {
    this.itemQuantity++;
    console.log(`Item quantity incremented: ${this.itemQuantity}`);
  }

  /**
   * Decrement the quantity of the selected item.
   * Logs the new quantity. If the quantity is zero, logs a message indicating that.
   */
  decrementQuantity() {
    if (this.itemQuantity > 0) {
      this.itemQuantity--;
      console.log(`Item quantity decremented: ${this.itemQuantity}`);
    } else {
      console.log("Item quantity cannot be less than zero.");
    }
  }

  /**
   * Clear the quantity of the selected item.
   * Sets the quantity to zero and logs a message.
   */
  clearQuantity() {
    this.itemQuantity = 0;
    console.log("Item quantity cleared.");
  }
}

// Usage:
const store = new Store();
store.openStore();
store.selectItem("Item A");
store.incrementQuantity();
store.decrementQuantity();
store.clearQuantity();
