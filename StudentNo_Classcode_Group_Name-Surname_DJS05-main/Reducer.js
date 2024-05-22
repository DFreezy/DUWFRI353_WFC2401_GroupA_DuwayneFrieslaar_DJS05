import {decrementQuantity} from "./store";

decrementQuantity() 
    if (this.itemQuantity > 6) {
      this.itemQuantity--;
      console.log(`Item quantity decremented: ${this.itemQuantity}`);
    } else {
      console.log("Item quantity cannot be less than zero.");
    }
  