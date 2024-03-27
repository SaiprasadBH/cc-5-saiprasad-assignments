/*This file contains the isPrime() function which throws an exception based on pre-conditions and post-conditions 
You can import isPrime() through require function */


//user-defined assertion function
const assert=(condition,message)=>{
    if(!condition){
        console.log("Oops!! the input is invalid, here is the exception thrown to describe why it is invalid");
        throw new Error(message);
    }
}


const isPrime=(number)=>{
    //Pre-condition
    if(assert(number>=2 && typeof number === 'number',"Input must be a number and greater than 2" )){
        return;
    }
    

    //validation of prime number
    for(let i=2;i<=Math.sqrt(number);i++){
        
            assert(number%i!==0,`${number} is not a prime number`);
        
         }
   
    
    
        return true;
    

    
}


//post conditions
assert(isPrime(11))
assert(isPrime(5))
assert(isPrime(0))
assert(isPrime('a'))
assert(isPrime(9))





module.exports={isPrime,assert};






