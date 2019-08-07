function callbackFunction(callback) {
    callback();
}

function testFunction() {
    var text = "callback function is closure";
    callbackFunction(function() {
        console.log(text);
    });
}

testFunction();