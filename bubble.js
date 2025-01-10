import {generateArray} from './randomArray.js'

const array = generateArray();

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }  
        }
    }
    return arr
}

console.log("Original array:", array)
console.log("Sorted array:", bubbleSort(array))