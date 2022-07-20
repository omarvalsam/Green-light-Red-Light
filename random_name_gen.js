const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
// create an array that will hold multiple objects that will hold a name and a number
// for this instance we will use generatedNames and then have it assigned two values
var generatedNames =[];
var charactersLength = characters.length;


//  create a for loop to create a random numerical value to each one as well
// then F/X is used to assign a name to each number

// object will look like this  use a for each to add a number to a name
// randomName ={
//     [
//      name: Omar
//      index: 1
//     ]
// }
function randomNameGen() {
    var getObject ={};
    const number= Math.floor(Math.random() * 100);
    getObject.index=number;
    
        var result ="";
        for ( var i = 0; i < 10; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
            charactersLength));
            
        } getObject.name=result
    generatedNames.push(getObject)
    
    
    generatedNames.sort
}

// Using node to test this code, The code below this will allow for this function to run 100 times
for (var i = 0; i < 100; i++) {
    randomNameGen()
}

// This will sort by index and then print it on a table in the terminal
generatedNames.sort((a, b) => {
    return a.index - b.index;
});
console.table(generatedNames)

//  then this will sort each one by alphabetical order and print it on a table.
generatedNames.sort((a, b) => {
    let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.table(generatedNames)

