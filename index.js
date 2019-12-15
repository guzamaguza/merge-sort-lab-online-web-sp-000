
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while (firstHalf.length !== 0 && secondHalf.length !== 0) {
            if (firstHalf[0] > secondHalf[0]){
                sorted.push(findMinAndRemoveSorted(secondHalf))
            }else{
                sorted.push(findMinAndRemoveSorted(firstHalf))
            }
    }
    return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(arr){
  let lengOfArray = arr.length;
  let midPoint = lengOfArray/2;
  let fHalf = arr.slice(0,midPoint);
  let sHalf = arr.slice(midPoint, arr.length);

    if(arr.length === 1){
      return arr;
    }else {
      merge(mergeSort(fHalf), mergeSort(sHalf))
    }
  }
