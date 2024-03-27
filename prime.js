/*This file contains the primeNumberConfirmation() function which logs the success if the argument passed is prime number
otherwise throws an exception based on pre-conditions and post-conditions 
You can import primeNumberConfirmation() through require function */


//user-defined assertion function
const assert=(condition,message)=>{
    if(!condition){
        console.log("Oops!! the input is invalid, here is the exception thrown to describe why it is invalid");
        throw new Error(message);
    }
}


const primeNumberConfirmation=(number)=>{
    //Pre-condition
    assert(number>=2 && typeof number === 'number',"Input must be a number and greater than 2" );
    

    //validation of prime number
    result=isPrime(number);
    
    //Post-condition
    assert(result,"The number you have provided is not a prime Number");

    //Finally if the input given is prime number this function logs the success
    if(result===true){
        console.log("It is a prime number");
    }

    
}



//function to validate a prime number
const isPrime=(number)=>{
    result=true;
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i===0){
            result=false;
        }
        
    }
    return result;


}

module.exports={primeNumberConfirmation,isPrime,assert};
//console.log(module);

//primeNumberConfirmation(0);
//primeNumberConfirmation(5);
// primeNumberConfirmation(2);
//primeNumberConfirmation(-2);
//primeNumberConfirmation('a');
primeNumberConfirmation(9);





