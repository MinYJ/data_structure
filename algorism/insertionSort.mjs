function insertionSort(arr) {
  for(let i=0; i<arr.length-1; i++) {
    for(let j=i; j>=0; j--) {
      if(arr[j] > arr[j+1]) {
        const temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}


let arr = [4, 2, 1, 3, 7, 8];
insertionSort(arr);
console.log(arr);


// function test(arr) {
//   for(let i=0; i<arr.length-1; i++) {
//     let minium_index = i;
//     for(let j=i+1; j>0; j--) {
//       if(arr[j-1] > arr[i+1]) {
//         minium_index = i+1;
//       } else { break; }
//     }

//   }
// }