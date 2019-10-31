
for (let i = 0; i < 1000; i++) {
    if (i > 400) {
        break;
    }
    console.log(i);
}


//for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
for (let j = 100; j >= 0; j--) {
    console.log(j);
}
for (let h = 0; h < 100; h++) {
    if (h % 2 === 0) {
        console.log(h);
    }
}

let output = "";
for (let row = 1; row <= 13; row++) {

    for (let column = 1; column <= row; column++) {
        output += "*";
    }
    console.log(output);
    output = "";
}

//while
let box = 0;
while (box <= 10) {
    console.log(box);
    box++;
}

// do  while

let box2 = 100;
do {
    console.log(box2);
    box2--;
}
while (box2 != -1); 

