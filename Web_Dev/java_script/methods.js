// Practicing java script.............

let score = "33";
console.log(typeof score);
console.log(typeof(score));

let change_num = Number(score);
console.log(change_num);
console.log(typeof change_num);

let str = "123ab";
let str_to_num = Number(str);
console.log(typeof str_to_num);
console.log(str_to_num);    // NaN value

console.log(1+"1");
console.log("1"+1);
console.log(1+2+"3");
console.log("1"+2+3); // Takes everything string after string

console.log("2">1);
console.log(1>"2");
console.log("1">2);
console.log(2>"1");

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined==0);

console.log("2"==2);    // checking only values.
console.log("2"===2);   // Strict check of data types also 

let a = 5;
let b = 5;
console.log(a==b); // Primitive type are comparison by value.

let arr1 = [1,2,3];
let arr2 = [1,2,3];
console.log(arr1==arr2); // Non-Primitive type are comparison by reference. Address of arr1 and arr2 is not same so is false.

let arr3 = [1,2,3];
let arr4 = arr3;
console.log(arr3==arr4); // arr3 and arr4 have same memory location so is getting true.

let data ={
    email: "abc@gmail.com",
    userid : 123
}
console.log(data);
console.log(data.email);

let name = "Natansh";
let repoCount = 50;
console.log(`My name is ${name} and my repocount is more then ${repoCount}`);

let name1 = "Natansh";
console.log(name1.__proto__);
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(2));
console.log(name1.indexOf("a",2));
console.log(name1.substring(0,3));
console.log(name1.slice())

let h = "         Dushyant";
console.log(h);
console.log(h.trim());

let url = "https://www.notion.so/Java-Script-baf71a813ded421ea64dab5d7ce3328d";
console.log(url.replace("-","----"));
console.log(url.includes("Natansh"));

let sen = "My name is Natansh";
console.log(sen.split(" "));