function receivesAFunction(cb){
    return cb();
}
function returnsANamedFunction(){
    return function cb2(){};
}
function returnsAnAnonymousFunction(){
    return function(){};
}