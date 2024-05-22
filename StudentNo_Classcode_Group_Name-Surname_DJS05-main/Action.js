import {incrementQuantity, selectItem} from "./store.js"

selectItem(item) 
    this.selectItem = item;
    console.log(`Selected item: ${item}`);
  

  incrementQuantity() 
    this.itemQuantity++;
    console.log(`Item quantity incremented: ${this.itemQuantity}`);
  

