
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
        let currentMin2 = findMinAndRemoveSorted(secondHalf)
        let currentMin1 = findMinAndRemoveSorted(firstHalf)
      if(currentMin1 > currentMin2){
          sorted.push(currentMin2)
      }else{
          sorted.push(currentMin1)
      }
    }
      return sorted;
}

function mergeSort(arr){
  let midPoint = arr.length/2;
  let fHalf = arr.slice(0,midPoint);
  let sHalf = arr.slice(midPoint, arr.length);

    if(arr.length == 1){
      return array;
    } else {
      merge(mergeSort(fHalf), mergeSort(sHalf))
    }
  }
