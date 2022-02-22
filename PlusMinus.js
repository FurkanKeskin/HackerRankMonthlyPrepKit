'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // const sortedArr = arr.sort(); // This sorted array will be here for further experiments
    const counts = [{
        positives: 0,
        negatives: 0,
        zeros: 0
    }];
    counts.positives = arr.filter(i => i > 0).length;
    counts.negatives = arr.filter(i => i < 0).length;
    counts.zeros =  arr.filter(i => i === 0).length;
    
    // Above creation of the counts array of objects has O(3n)
    // time complexity since I've used arr.filter for three conditions
    // there should be some other more elegant solution..
    console.log((counts.positives / arr.length).toFixed(5));
    console.log((counts.negatives / arr.length).toFixed(5));
    console.log((counts.zeros / arr.length).toFixed(5));
    return;
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
