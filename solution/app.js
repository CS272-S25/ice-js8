
/**
 * Calculates the sum of the given numbers
 * using a while loop.
 * @param {number[]} nums list of numbers to sum
 * @returns {number} the sum.
 */
function sumNumsWhile(nums) {
    let count = 0;
    let sum = 0;
    while (count < nums.length) {
        sum = sum + nums[count];
        count = count + 1;
    }
    return sum;
}

/**
 * Calculates the factorial of the given number
 * using a while loop. You may assume it is an integer.
 * @param {number} n the number to take the factorial of
 * @returns {number} the factorial of the given number
 */
function factorialWhile(n) {
    if (n <= 0) {
        return -1;
    } else {
        let product = 1;
        let i = n;
        while (i > 0) {
            product = product * i;
            i = i - 1;
        }
        return product;
    }
}

/**
 * Calculates the sum of the given numbers
 * using a for loop.
 * @param {number[]} nums list of numbers to sum
 * @returns {number} the sum.
 */
function sumNumsFor(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}

/**
 * Calculates the factorial of the given number
 * using a for loop. You may assume it is an integer.
 * @param {number} n the number to take the factorial of
 * @returns {number} the factorial of the given number
 */
function factorialFor(n) {
    if (n <= 0) {
        return -1;
    } else {
        let product = 1;
        for (let count = n; count > 0; count--) {
            product = product * count;
        }
        return product;
    }
}

/**
 * Attempts to find the targetName in the list of names.
 * @param {string[]} names the list of names
 * @param {string} targetName the name being searched for
 * @returns {boolean} whether the targetName was found in names
 */
function findMe(names, targetName) {
    let i = 0;
    let hasFound = false;
    while (i < names.length) {
        let currName = names[i];
        if (currName.toLowerCase() === targetName.toLowerCase()) {
            hasFound = true;
            break;
        }
        i = i + 1;
    }
    return hasFound;
}

/**
 * Counts how many times the target letter appears in sentence
 * @param {string} sentence the full sentence to search through
 * @param {string} letter the letter, with a string length of 1
 * @returns {number} the number of times letter appears in sentence
 */
function includesLetter(sentence, letter) {
    let numInclusions = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].toLowerCase() === letter.toLowerCase()) {
            numInclusions++;
        }
    }
    return numInclusions;
}


/**
 * Finds the maximum value in a list of numbers
 * @param {number[]} nums the list of numbers
 * @returns {number} the maximum value found in nums
 */
function findMax(nums) {
    if (nums.length === 0) {
        return null;
    } else {
        let max = nums[0];
        for (let i = 1; i < nums.length; i++) {
            let currNum = nums[i];
            if (currNum > max) {
                max = currNum;
            }
        }
        return max;
    }
}
