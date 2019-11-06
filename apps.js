const myButton = document.querySelector('#button');
let currentNumbers = [];


// creates an array of (x) random numbers, between 0 and (limit)
const getRandomNumbers = (x, limit) => {
    let numberArray = [];
    while(numberArray.length < x){
        numberArray.push(Math.floor(Math.random() * limit));
    }
    return numberArray;
};

//prints the array (r) to an html list
const printNumbers = (r) => {
    let output = '<ul><li>';
    output+= r.concat('</li><li>');
    output+= '</li><ul>';
    document.getElementById('output').innerHTML = output;
}

myButton.addEventListener('click', 
    function() => {
        currentNumbers = getRandomNumbers(10, 100);
        printNumbers(currentNumbers);
    }
);
