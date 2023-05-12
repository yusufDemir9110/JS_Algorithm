//LinearSearch
const findIndex=(myArray,t)=>{
    for(let i=0;i<myArray.length;i++){
        if(myArray[i]===t){
            return i
        }
    }
    return -1
}

console.log(findIndex([-5,2,10,4,6],10)); 
console.log(findIndex([-5,2,10,4,6],6));
console.log(findIndex([-5,2,10,4,6],20));


//BinarySearch (array must be sorted)
const findIndexBinary=(arr,t)=>{
    let leftIndex=0
    let rightIndex=arr.length-1

    while(leftIndex<=rightIndex){
        let middleIndex=Math.floor((leftIndex+rightIndex)/2)
        if(t===arr[middleIndex]){
            return middleIndex
        }
        if(t<arr[middleIndex]){
            rightIndex = middleIndex-1
        }else{
            leftIndex=middleIndex+1
        }
        
    }
    return -1
}
console.log(findIndexBinary([-5,2,4,6,10],10));
console.log(findIndexBinary([-5,2,4,6,10],6));
console.log(findIndexBinary([-5,2,4,6,10],20));


//Recursive Binary Search
const recursiveBinarySearch=(arr, target, start=0, stop=(arr.length-1))=> {

    let midPoint = Math.floor(((stop-start)/2) + start)
  
    switch (true) {
      case arr[midPoint] === target:
        return midPoint
      case stop - start === 0:
        return -1
      case arr[midPoint] < target:
        return recursiveBinarySearch(arr, target, midPoint+1, stop)
      case arr[midPoint] > target:
        return recursiveBinarySearch(arr, target, start, midPoint)
    }
  }

console.log(recursiveBinarySearch([-5,2,4,6,10],10));
console.log(recursiveBinarySearch([-5,2,4,6,10],6));
console.log(recursiveBinarySearch([-5,2,4,6,10],20));