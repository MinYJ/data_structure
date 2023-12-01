import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue{
  constructor(){
    this.list = new DoublyLinkedList();
  }

  enqueue(data){
    this.list.insertAt(0, data);
  }

  dequeue(){
    return this.list.deleteLast();

    // try{
    //   return this.list.deleteLast();
    // } catch(e) {
    //   return null;
    // }
  }

  front(){
    return this.list.tail;
  }

  isEmpty(){
    console.log(`count: ${this.list.count}`);
    return (this.list.count == 0);
  }
}

export { Queue };