//mySolution
const isPowerOfTwo=(n)=>{
    if(Number.isInteger(Math.log2(n))){
        return true
    }else{
        return false
    }
}


//otherSolution
const isPowerOfTwo2=(n)=>{
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}


//magicSolution
const isPowerOfTwoBitWise=(n)=>{
    if(n<1){
        return false
    }
    return (n&(n-1))===0
}

console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(4))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(15))
console.log(isPowerOfTwo(28))
console.log(isPowerOfTwo(56))
console.log(isPowerOfTwo(256))

console.log(isPowerOfTwo2(8))
console.log(isPowerOfTwo2(4))
console.log(isPowerOfTwo2(2))
console.log(isPowerOfTwo2(1))
console.log(isPowerOfTwo2(15))
console.log(isPowerOfTwo2(28))
console.log(isPowerOfTwo2(56))
console.log(isPowerOfTwo2(256))

console.log(isPowerOfTwoBitWise(2))