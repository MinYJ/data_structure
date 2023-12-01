function selection(array) {
  for(let i=0; i<array.length - 1; i++) {
    let minIndex = i;
    for(let j=i+1; j<array.length; j++) {
      if(array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
}

const array = [7,1,5,2];

selection(array);
console.log(array);