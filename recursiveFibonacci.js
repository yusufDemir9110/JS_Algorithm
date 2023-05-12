//mySolution
const findRecursiveFibonacci=(n)=>{
    if(n<2){
        return n
    }
    const fibonacci=[0,1]
    for(let i=2;i<n+1;i++){
        fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
    }
    return fibonacci[n]
}

console.log(findRecursiveFibonacci(6))

//otherSolution
const findRecursiveFibonacci2=(n)=>{
    if(n<2){
        return n
    }
    return findRecursiveFibonacci2(n-1)+findRecursiveFibonacci2(n-2)
}

console.log(findRecursiveFibonacci2(6))