//BubleSort
const bubbleSort=(arr)=>{
    let swapped
    do{
        swapped = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                swapped=true
            }
        }
    }while(swapped)
    return arr
}

console.log(bubbleSort([-6,20,8,2,4]))



//InsertionSort
const insertionSort=(arr)=>{
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        let j = i-1
        while(j>=0&&arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
    return arr
}
console.log(insertionSort([-6,20,8,2,4]))



//QuickSort
const quickSort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1]
    const left = []
    const right = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([-6,20,8,2,4]))

//MergeSort
const mergeSort=(arr)=>{
    if(arr.length<2){
        return arr
    }
    const left = arr.slice(0,(Math.floor(arr.length/2)))
    const right =arr.slice((Math.floor(arr.length/2)))
    return merge(mergeSort(left),mergeSort(right))
}
const merge=(left,right)=>{
    const sortedArray=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}
console.log(mergeSort([-6,20,8,2,4]))