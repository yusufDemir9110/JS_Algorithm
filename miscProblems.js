//CartesianProduct
const cartesianProduct=(arrOne,arrTwo)=>{
    let cartesian=[]
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            cartesian.push([arrOne[i],arrTwo[j]])
        }
    }
    return cartesian
}

console.log(cartesianProduct([1,2],[3,4,5]))


//ClimbingStaircase
const climbingStaircase=(n)=>{
    const noOfWays = [1,2]
    for(let i = 2;i<=n;i++){
        noOfWays[i]= noOfWays[i-1]+noOfWays[i-2]
    }

    return noOfWays[n-1]
}
console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))
console.log(climbingStaircase(6))


//TowerOfHanoi
const towerOfHanoi=(n, fromRod, toRod, usingRod)=>{
    if(n===1){
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`)
        return 
    }
    towerOfHanoi(n-1,fromRod,usingRod,toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n-1,usingRod,toRod,fromRod)
}

towerOfHanoi(5, "A", "C", "B")
