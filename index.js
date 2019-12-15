
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

function mergeSort(array){
  
  var midPoint = array.length / 2;
  var fHalf = array.slice(0,midPoint);
  var sHalf = array.slice(midPoint, array.length);

    if(array.length === 1){
      return array;
    }else {
      merge(mergeSort(fHalf), mergeSort(sHalf))
    }
  }
