function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) continue;
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  // Ví dụ sử dụng
  const array = [34, 7, 23, 32, 5, 62];
  console.log("Mảng chưa sắp xếp:", array);
  const sortedArray = quickSort(array);
  console.log("Mảng đã sắp xếp:", sortedArray);
  