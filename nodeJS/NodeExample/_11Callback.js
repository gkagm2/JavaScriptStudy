function square(x, callback){
    setTimeout(callback, 1000, x*x);
    setInterval(testFunction, 1000);
}
function testFunction(){
    var count =0 ;
    var testFunction = function(){
        count++;
        return count;
    }
    
    console.log("ss %d", count++);
}

var number = 0;
    square(2, function(x){
        number =x;
    });
    console.log(number);