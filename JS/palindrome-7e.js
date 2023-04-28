function checkPalindrome(str) {
    const length = str.length;
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i])
        {
            return (string1+' is not a Palindrome');
        }
        return (string+' is a Palindrome');

    }
}
const string = "refer";
const string1="Dance";
const value = checkPalindrome(string);
const value1 = checkPalindrome(string1);

console.log(value);
console.log(value1);

