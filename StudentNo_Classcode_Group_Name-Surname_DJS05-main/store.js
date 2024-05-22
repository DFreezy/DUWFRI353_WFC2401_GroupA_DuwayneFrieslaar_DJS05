export class Store {
    constructor() {
      this.selectedItem = null;
      this.itemQuantity = 0;
    }
  
    openStore() {
      // Perform actions needed to open the store
      console.log("Store is opened.");
    }
  
    selectItem(item) {
      this.selectedItem = item;
      console.log(`Selected item: ${item}`);
    }
  
    incrementQuantity() {
      this.itemQuantity++;
      console.log(`Item quantity incremented: ${this.itemQuantity}`);
    }
  
    decrementQuantity() {
      if (this.itemQuantity > 0) {
        this.itemQuantity--;
        console.log(`Item quantity decremented: ${this.itemQuantity}`);
      } else {
        console.log("Item quantity cannot be less than zero.");
      }
    }
  
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
  