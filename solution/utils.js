function doSumNumsWhile() {
    let resp = prompt("Enter a list of numbers, seperated by commas.");
    let nums = resp ? resp.split(",").map(parseFloat) : [];
    let ret = sumNumsWhile(nums);
    alert(`The sum of ${JSON.stringify(nums)} is ${ret}`);
}

function doFactorialWhile() {
    let resp = prompt("Enter an integer.");
    let num = parseInt(resp);
    let ret = factorialWhile(num);
    alert(`The factorial of ${num} is ${ret}`);
}

function doSumNumsFor() {
    let resp = prompt("Enter a list of numbers, seperated by commas.");
    let nums = resp ? resp.split(",").map(parseFloat) : [];
    let ret = sumNumsFor(nums);
    alert(`The sum of ${JSON.stringify(nums)} is ${ret}`);
}

function doFactorialFor() {
    let resp = prompt("Enter an integer.");
    let num = parseInt(resp);
    let ret = factorialFor(num);
    alert(`The factorial of ${num} is ${ret}`);
}

function doFindMe() {
    let resp = prompt("Enter a list of names, separated by commas.");
    let namesArr = resp ? resp.split(",") : [];
    let name = prompt(`Of the list, ${JSON.stringify(namesArr)}, who are you trying to find?`);
    let isFound = findMe(namesArr, name);
    if (isFound) {
        alert(`"${name}" exists in ${JSON.stringify(namesArr)}`);
    } else {
        alert(`"${name}" does NOT exist in ${JSON.stringify(namesArr)}`);
    }
}

function doIncludesLetter() {
    let resp = prompt("Type out a sentence.");
    let confirmedLetter;
    while(!confirmedLetter) {
        let letter = prompt("Which letter would you like to look for?");
        if(letter.length === 1) {
            confirmedLetter = letter;
        }
    }
    let numTimes = includesLetter(resp, confirmedLetter);
    alert(`"${confirmedLetter}" appears in "${resp}" ${numTimes} time(s)!`)
}

function doFindMax() {
    let resp = prompt("Enter a list of numbers, seperated by commas.");
    let nums = resp ? resp.split(",").map(parseFloat) : [];
    let ret = findMax(nums);
    alert(`The max of ${JSON.stringify(nums)} is ${ret}`);
}
