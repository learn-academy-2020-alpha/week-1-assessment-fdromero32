// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const boilingPoint = (num) => {
    if(num < 212){
        return `${num} is below boiling point!`
    } else if(num > 212){
        return `${num} is above boiling point!`
    } else if (num === 212){
        return `${num} is at boiling point!`
    } else {
        return "Please input a number value"
    }
}

console.log(boilingPoint(temp1))
console.log(boilingPoint(temp2))
console.log(boilingPoint(temp3))


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const multiplyArr = arr => {
    let newArr = []
    for(i = 0; i < arr.length; i++){
         newArr.push(arr[i] * 5)
        }
        return newArr
    }

console.log(multiplyArr(myNumbers1))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const mapArr = myNumbers2.map(value => value * 5)

console.log(mapArr)



// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"


const noVowels1 = str => {

    //turn string into an array

    var array1 = stringWithVowels1.split('')

    //create new array where the vowels are omitted. Use .filter method with "not" operator to flush out the vowels

    var newArr1 = array1.filter(value => value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value!== 'u'
    )
    //now that the vowels have been removed from the array, return the array into a string with no vowels.

    return newArr1.join('')
}

//repeat steps above with string2

//use stringWithVowels2.toLowerCase.split('') to turn string to lowercase & included both to remove both vowels without affecting capitalization of other leters.

const noVowels2 = str => {
    var array2 = stringWithVowels2.split('')
    var newArr2 = array2.filter(value => value !== 'a' && value !== 'e' && value !== 'I' && value !== 'i' && value !== 'o' && value!== 'u'  )
    return newArr2.join('')
}

//log both strings with no vowels

console.log(noVowels1(stringWithVowels1))
console.log(noVowels2(stringWithVowels2))


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

//added extra variable with a string to test if function would catch it.

var string1 ='HeyHowAreYou'

const noStrAllowed = str => {

    //checks if the input is a string or not

    if(typeof str !== "string"){
        return "This is not a string"
    }

    //create a new array that comes from input. Creates array with indivudal letters

    var array = str.split('')

    //create new array that takes input array value and filters out vowels.

    var newArr1 = array.filter(value => value !== 'a' && value !== 'e' && value !== 'i' && value !== 'o' && value!== 'u')

    //now that the vowels have been removed from the array, return the array into a string with no vowels.

    return newArr1.join('')
}

//call all the variables.
console.log(noStrAllowed(notAString1))
console.log(noStrAllowed(notAString2))
console.log(noStrAllowed(string1))

// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

//use filter to check for array values that contain "cat"
var onlyCats = toonimals.filter(value => value.animal === "cat" )

//log onlyCats value
console.log(onlyCats)

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"


//filtered out non cat values into new array

var noCats = toonimals.filter(value => value.animal !== "cat" )

//created function that pulls only object values relating to "names"

const noCatNames = arr => {

  //syntax for pulling out specific information
  //escape character to create external ""

  let result = "\"" + noCats.map(a=> a.name).join('" "') + "\""

  //return results to log values into variable.
  
  return result
}

console.log(noCatNames(noCats))
