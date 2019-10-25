function showEvenNumbers(max) {
    for (let i = 0; i <= max; i++) {
        if (i % 2 === 0) {
            consule.log(`${i}is even`);
        }

    }
}

function showUser(name, age, phoneNumber, street, postalCode, married) {
    console.log("Name", name);
    console.log("Age" = age);
    console.log("Phonenumber" = age);
    console.log("Street" = age);
    console.log("Postalcode" = age);
    console.log("Married" = age);
}

function fibonacci(max) {
    let previous = 0;
    consule log(previous);
    let current = 1;
    consule log(current);
    let next = previous + current;
    for (let i = 0; i < max; i++) {
        consule.log(next);
        previous = current;
        current = next;
        next = previous + current;
    }
}
fibonacci(8);//0,1,1,2,3,5,8,13,21,34

const showName=function(){
    console.log("=======");
    
}