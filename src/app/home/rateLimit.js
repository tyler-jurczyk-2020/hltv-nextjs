export function rateLimit() {
    let oldTimeStamp = Date.now();
    return function(func) {
        if(Date.now - oldTimeStamp > 10000) {
            func(); 
        }
        else {
            throw new Error('Too many calls!');
        }
        oldTimeStamp = Date.now();
    }
}
