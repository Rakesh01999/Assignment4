const array = [1, 2, 3, NaN, 5, NaN, 7];

function printArrayWithoutNaN(array) {
    const filteredArray = array.filter(element => !isNaN(element));
    console.log(filteredArray);
}

printArrayWithoutNaN(array);
