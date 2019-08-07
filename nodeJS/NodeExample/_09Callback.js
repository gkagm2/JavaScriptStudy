function square(x, callback){
    setTimeout(callback, 1000, x*x);
}

square(2, function(number){
    console.log(number);
});