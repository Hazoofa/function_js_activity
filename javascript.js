//1
function areAnagrams(str1, str2) {
    // Convert both strings to arrays and sort them alphabetically
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
  }
/////////////////////////
const isAnagram = areAnagrams('listen', 'silent');
console.log(isAnagram); // Output: true


//2
function getElementsBetween(array, start, end) {
    // Use slice() method to return a new array that includes elements from start to end (exclusive)
    return array.slice(start, end);
  }
///////////////////
const array = ['apple', 'banana', 'orange', 'pear', 'grape'];
const elements = getElementsBetween(array, 1, 4);
console.log(elements); // Output: ['banana', 'orange', 'pear']

//3
function stringToArray(str) {
    // Remove any leading/trailing whitespace and split the string by spaces
    return str.trim().split(' ');
  }

  
  ///////////////////////////
  const words = stringToArray('Hello world! How are you?');
  console.log(words); // Output: ['Hello', 'world!', 'How', 'are', 'you?']
  
//4
function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    
    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
/////////////////////////////
const age = calculateAge('1990-06-25');
console.log(age); // Output: 32 (assuming today's date is in 2023)



//5
function isValidEmail(email) {
    // Define regex pattern for email validation
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Test email against regex pattern
    return pattern.test(email);
  }
////////////////////////////
var email = "john.doe@example.com";
var valid = isValidEmail(email);
console.log(valid);





//6
function replaceSubstring(str, substr, replacement) {
    // Use the replace() method with a regular expression to replace all occurrences of the substring
    return str.replace(new RegExp(substr, "g"), replacement);
  }

  ///////////////////////////
  var str = "The quick brown fox jumps over the lazy dog";
var substr = "the";
var replacement = "a";
var result = replaceSubstring(str, substr, replacement);
console.log(result);


//7
function secondSmallest(arr) {
    // Create a copy of the input array and sort it in ascending order
    var sorted = arr.slice().sort(function(a, b) {
      return a - b;
    });
    
    // Return the second element of the sorted array
    return sorted[1];
  }
/////////////////////////////
var arr = [4, 2, 1, 5, 3];
var second = secondSmallest(arr);
console.log(second);




//8
function arrayDifference(arr1, arr2) {
    // Create a new empty array to store the difference
    var difference = [];
    
    // Iterate over the elements of the first array
    for (var i = 0; i < arr1.length; i++) {
      // If the current element is not in the second array, add it to the difference array
      if (arr2.indexOf(arr1[i]) === -1) {
        difference.push(arr1[i]);
      }
    }
    
    // Return the difference array
    return difference;
  }
///////////////////
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 5, 7, 9];
var difference = arrayDifference(arr1, arr2);
console.log(difference);






//9
function formatDuration(seconds) {
    // Calculate the number of hours, minutes, and seconds
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var remainingSeconds = seconds - (hours * 3600) - (minutes * 60);
    
    // Create an array to store the formatted duration components
    var components = [];
    
    // Add the hours component if necessary
    if (hours > 0) {
      components.push(hours + " hour" + (hours === 1 ? "" : "s"));
    }
    
    // Add the minutes component if necessary
    if (minutes > 0) {
      components.push(minutes + " minute" + (minutes === 1 ? "" : "s"));
    }
    
    // Add the seconds component if necessary
    if (remainingSeconds > 0 || components.length === 0) {
      components.push(remainingSeconds + " second" + (remainingSeconds === 1 ? "" : "s"));
    }
    
    // Combine the components into a formatted string
    var formatted = components.join(", ");
    
    // If there are multiple components, insert "and" before the last one
    if (components.length > 1) {
      var lastIndex = formatted.lastIndexOf(", ");
      formatted = formatted.substring(0, lastIndex) + " and " + formatted.substring(lastIndex + 2);
    }
    
    // Return the formatted duration string
    return formatted;
  }

  /////////////////////////
  var duration = 7265;
var formatted = formatDuration(duration);
console.log(formatted);


//10
function toCamelCase(input) {
    // Split the input string into an array of words
    var words = input.split(/\W+/);
    
    // Capitalize all words except the first one
    for (var i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the words back together into a CamelCase string
    var output = words.join("");
    
    return output;
  }
  

  //////////////////
  var input = "the quick brown fox jumps over the lazy dog";
var output = toCamelCase(input);
console.log(output);
