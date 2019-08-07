function square(x, callback){
    setTimeout(callback, 1000, x*x);
}

square(2, function(x){
    square(x, function(x2){
        square(x2, function(x3){
            console.log(x3);
        })
    })
})