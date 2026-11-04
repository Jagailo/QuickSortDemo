var randomArraySizeRange = [6, 90]; // [min, max]
var randomArrayIntRange = [-99, 99]; // [min, max]
var arrayCount = 0;

function fillArray() {
    var inputString = document.getElementById('arrayInput').value;
    var inputArray = inputString.match(/-?\d+(?:\.\d+)?/g);

    if (inputArray != null) {
        document.getElementById('array-data').style.display = 'block';
        turnOffTimer(true);
        var array = getConvertArray(inputArray);
        arrayCount = array.length;
        clearHistory();
        printArray(array, 'sourceArray');
        printArray(quickSort(array), 'currentArray');

        if (sortHistory.length === 0) {
            addLoop(array, 0, 0, 0, array.length - 1, 0);
        }

        setTimer(startAnimation('slider', arrayCount));
    }
}

function randomFill() {
    var string = '';
    var arraySize = randomInteger(randomArraySizeRange[0], randomArraySizeRange[1]);

    for (var i = 0; i < arraySize; i++) {
        string += randomInteger(randomArrayIntRange[0], randomArrayIntRange[1]) + ' ';
    }

    document.getElementById('arrayInput').value = string;
    fillArray();
}

function play() {
    turnOffTimer(false);
    setTimer(startAnimation('slider', arrayCount));
}

function pause() {
    turnOffTimer(false);
}

function stop() {
    turnOffTimer(true);
    drawFinalLoop();
}

function sliderChange() {
    var slider = document.getElementById('slider');
    var input = document.getElementById('sliderInput');

    if (slider.value != 0) {
        input.value = slider.value;
    } else {
        input.value = 'auto';
    }
}

function sliderInputChange() {
    var input = document.getElementById('sliderInput');
    var value = +input.value;

    if (input.value.trim() != '' && !isNaN(value) && value >= 0 && value <= 2000) {
        document.getElementById('slider').value = value;
        if (value == 0) {
            input.value = 'auto';
        }
    }
}
