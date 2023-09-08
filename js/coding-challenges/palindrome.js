// A string is a palindrome when its reverse is exactly equal to its original form. For example, “madam” is a palindrome string because its original and reverse are exactly the same. Similarly, “car” is not a palindrome because its reverse (“rac”) is not the same as its original value.

// This is a very commonly asked coding challenge to the junior developers because it is regarding the concept of reversing values.

// A simple solution to this challenge is by reversing the string and checking its equality with the original string.

// For this, first, use the lowerCase() method to convert every string into one case. Then, use the split() to split the string into an array because the reverse() method can only be used on the array. When the array is reversed, use the join() method to convert it back into a string again.

// Finally, check if the original and reverse strings are equal or not.

let firstString = 'madam';
let secondString = 'car';

function isPalindrome(string) {
    let originalString = string;
    let reversedString = string.split('').reverse().join('');

    console.log(originalString);
    console.log(reversedString);

    if (reversedString === originalString) {
        console.log(originalString + ' is a Palindrome');
    } else {
        console.log(originalString + ' is not a Palindrome');
    }
}

isPalindrome(firstString);
isPalindrome(secondString);
