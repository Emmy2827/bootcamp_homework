function number()
{

    let result=0;
    let number=78965;
    result=Number(String(number).split('').reverse().join(''));
    return(" Reversed Number is: " + result);
}
console.log(number());



