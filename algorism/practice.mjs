function insertion(array) {
  for(let i=0; i<array.length-1; i++) {
    let insertedData = array[i+1];
    for(let j=i; j>=0; j--) {
      if(array[j] > insertedData) {
        array[j+1] = array[j];
      } else {
        array[j+1] = insertedData
        break;
      }
    }
    array[i] = insertedData;
  }
}

const array = [4,1,2,5];
insertion(array)
console.log(array);


// const obj = {
//   'a': '1'
// }

// let number = {};

// number = obj;
// console.log(number.a);
// number.a = '2';
// console.log(number.a);
// console.log(obj.a);

// obj.a = '4';
// console.log(number.a);
// console.log(obj.a);
