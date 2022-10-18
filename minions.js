const minions = [
    "bob",
    "kevin",
    "stuart",
    "dave",
    "jerry",
    "mark",
    "tim",
    "phil",
    "carl",
  ]
//   First, he wants to test out forEach to check who's present. So as he goes down the array of minions, they should console.logthat they're here.

const presentMinions = (arr) => {
        arr.forEach((element) =>{
        console.log(element + '- here');
    });
};
    
presentMinions(minions);


//Using the map method, capitalize each minion's name EXCEPT kevin's because he was being sneaky and save it to a new array called capitalizedMinions

function capNames(name) {
    return name !== 'kevin' ? name.charAt(0).toUpperCase() + name.slice(1) : 'kevin';
};
let capitalizedMinions = minions.map(capNames);
      
console.log(capitalizedMinions);


//Use filter to filter out minions that are not capitalized and save the correctly capitalized minions to an array called actuallyCapitalizedMinions

const actuallyCapitalizedMinions = capitalizedMinions.filter((element) => {
         return element !== 'kevin';
     });

console.log(actuallyCapitalizedMinions);

//Use every again, but this time on your new actuallyCapitalizedMinions array, to check if they're all capitalized now

const isEveryNameCap = actuallyCapitalizedMinions.every((element) => {
   return capCheck(element);
});

console.log(isEveryNameCap);


//Create a function called isCapitalized that accepts a minion as an argument and checks whether or not the first letter of the minion's name is capitalized


function capCheck(name){
   return name.charAt() === name.charAt(0).toUpperCase();
};


//Using find, find which minion is not correctly capitalized in the original capitalizedMinionsarray and save it to a variable called uncapitalizedMinion, then console log it

const uncapitalizedMinion = capitalizedMinions.find((element) =>{
    return element.charAt(0) !== element.charAt(0).toUpperCase();
});

console.log(uncapitalizedMinion);


//Using findIndex, find what index kevin is in the original capitalizedMinions array

const sneakyMinionsHouse = capitalizedMinions.findIndex((minionName) => minionName === uncapitalizedMinion);
console.log(sneakyMinionsHouse);


//Now that he's found him, he can just use capitalizedMinions[1]to select kevin and capitalize his name.

capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toUpperCase() + capitalizedMinions[1].slice(1);
console.log(capitalizedMinions);


//Once that's done, check again using everywhether or not capitalizedMinionsis all capitalized correctly

const finalCheck = capitalizedMinions.every((element) => {
    return capCheck(element);
 });
 
 console.log(finalCheck);


 //First, using map create a separate array called minionNameLengths that maps out the minions' name lengths

const minionNameLengths = capitalizedMinions.map(el => el.length);
console.log(minionNameLengths);


//Use reduceto sum up the minionNameLengths array

const sum = minionNameLengths.reduce((total, nameLength) => total + nameLength, 0);
console.log(sum);


//Check whether or not some of the minion's name lengths are 6 or above. How about 7 or above?

const sixOrAbove = minionNameLengths.some((element) => element >= 6);
const sevenOrAbove = minionNameLengths.some((element) => element >= 7);
console.log(sixOrAbove);
console.log(sevenOrAbove);

//Lowercase Kevin's name again inside of the capitalizedMinionsarray, then check whether or not some of the minion's names are capitalized using some. How about it any are lowercased?

capitalizedMinions[1] = capitalizedMinions[1].charAt(0).toLowerCase() + capitalizedMinions[1].slice(1);
const someCap = capitalizedMinions.some((element) => element.charAt(0) === element.charAt(0).toUpperCase());
const someNotCap = capitalizedMinions.some((element) => element.charAt(0) === element.charAt(0).toLowerCase());
console.log(someCap)
console.log(someNotCap)


//Use sort to order the minions within the capitalizedMinions array by order of name length.
//Hints: you'll need to write your own compareMinionsfunction first to pass in as a callback to sort

function compareMinionsfunction(a, b){
    if(a.length < b.length){
        return -1;
    }
    if(a.length > b.length){
        return 1;
    }
    return 0;
}

capitalizedMinions.sort(compareMinionsfunction);
console.log(capitalizedMinions)