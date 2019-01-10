var words = ["ground", "control", "to", "major", "tom"];

function map(words, func) {
    var array = [];
    for (word of words) {
        array.push(func(word));
    }
    console.log(array);
}


map(words, function (word) {
    return word.length;
});

map(words, function (word) {
    return word.toUpperCase();
});

map(words, function (word) {
    return word.split('').reverse().join('');
});