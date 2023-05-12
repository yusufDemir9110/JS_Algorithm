const findFibonacci=(n)=>{
    const fibonacci = [0,1]
    if(n<2){
        console.log("enter a number which is greater or equal than 2")
    }else{       
        for(let i=2;i<n;i++){
            fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
        }
        console.log(fibonacci) 
    }
      
}

findFibonacci(5)