function factorial(x)
{
    if (x===0)
    {
        return 1;
    }
    return x*factorial(x-1);

}
console.log("Factorial of 6 is:" +factorial(6));
console.log("Factorial of 10 is:"+ factorial(10));
console.log("Factorial of 15 is:"+ factorial(15));
