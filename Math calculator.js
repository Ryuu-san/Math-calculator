var GoResult = document.getElementById('result');
GoResult.onclick = function() {
    var inputBefore = document.getElementById('fieldBefore');
    var inputAfter = document.getElementById('fieldAfter');

    var searchLine = inputBefore.value;
    var result = '';
    var searchPattern = /\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig;
    var searchResults = searchLine.match(searchPattern);

    if (searchResults[0] * 1 + "" !== "NaN") {
        result += searchResults[0] * 1;
    }

    for (var i = 0; i < searchResults.length; i++) {
        if (searchResults[i] === '+') {
            result = +result + +searchResults[i + 1];
        }
        if (searchResults[i] === '-') {
            result -= searchResults[i + 1];
        }
        if (searchResults[i] === '*') {
            result *= searchResults[i + 1];
        }
        if (searchResults[i] === '/') {
            result /= searchResults[i + 1];
        }
        if (searchResults[i] === '=') {
            return false;
        }
        inputAfter.value = parseInt(result * 100) / 100;
    }
}