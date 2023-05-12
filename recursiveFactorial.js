const findRecursiveFactorial=(n)=>{
    if(n===0){
        return 1
    }
    return n * findRecursiveFactorial(n-1)
}

console.log(findRecursiveFactorial(5))