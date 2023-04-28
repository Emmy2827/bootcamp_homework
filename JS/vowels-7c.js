function vowel_count(str) {


    return str.replace(/[^aeiou]/g, "").length;

}
console.log("Vowel Count Program");
console.log(" Vowel count in given text Rainbow is: " + vowel_count("Rainbow"));
console.log(" Vowel count in given text Beautiful is: " +vowel_count("Beautiful"));
console.log(" Vowel count in given text Encyclopedia is: "+vowel_count("Encyclopedia"));


