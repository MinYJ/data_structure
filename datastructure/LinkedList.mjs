class Node {
  constructor(data, next = null) {
     this.data = data;
     this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data){
    if(index > this.count || index < 0){
      
    }
  }
}

export { Node };