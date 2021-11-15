// #1 

new Promise((resolve, reject) => {
    resolve(10);
    console.log('P');
    reject(new Error (20))
})

.then( x => console.log('F', x));
.catch (x => console.log('R', x));

// This will set a resolved value to 10, console log the leter P and also set up an error handler for the reject set to value 20. 


//#2

Promise.resolve(42); 
.then(x => console.log(x)) 
.then (x=> console.log(x))
.then (x => console.log(x))

//sets the onFufilled value of a promise to 42. The messages afterwards are logging that resolved value. 



//#3 

p = new Promise((resolve, reject) => {
    console.log('RUN'); 
    resolve(42);
});

p.then(x => console.log(x));
p.then(x => console.log(x)); 
p.then(x => console.log(x));

//This will console.log the word RUN and also set the promise value of fufilled(resolve) equal to 42. The .then statements afterward are logging the value of resolve. 