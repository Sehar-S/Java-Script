const name = "Sehar_Shahzadi"
const repoCount =  50

//console.log(name +  repoCount + " value");  outdated way to concatenate strings - avoid like this
// new way of doing it ``backpicks inside ${} we can use variables and expressions is called string-interpolation 

// console.log(`Hello ${name} you have ${repoCount} repos`)
const gameName = new String("sehar_shahzadi")
// console.log(gameName[0]);
// console.log(gameName.__proto__);
 console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-14, 3)
 console.log(anotherString);

 const newStringOne = "   Hello    "
 console.log(newStringOne);
 console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

 console.log(url.replace('%20', '-'))

 console.log(url.includes('sundar'))

 console.log(gameName.split(','));