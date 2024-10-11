function forEachCustom(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }

  let array = [10, 20, 30];
  forEachCustom(array, function(element, index, array) {
    console.log(element,index,array);
  });
  