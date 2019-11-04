let weekdayNumber1 = prompt("Enter numeric number between 1 and 7");
if (weekdayNumber1 == 1) {
    alert('today is Monday');
}
else if (weekdayNumber1 == 2) {
    alert("today is Tursday");
}
else if (weekdayNumber1 == 3) {
    alert("today is Wednesday");
}

else if (weekdayNumber1 == 4) {
    alert("today is Thursday");
}
else if (weekdayNumber1 == 5) {
    alert("today is Friday");
}
else if (weekdayNumber1 == 6) {
    alert("today is Saturday");
}
else if (weekdayNumber1 == 7) {
    alert("today is Sunday");
}
else {
    alert("number not between 1 and 7");
}

// let weekdayNumber = prompt("Enter numeric number between 1 and 7");
//     switch(weekdayNumber){
//       case '1':
//        alert("Today is monday");
//         break;
//         case '2':
//         alert("Today is Tuesday");
//         break;
//         case'3':
//         alert("today is Wednesday");
//         break;
//         case'4':
//         alert("today is Thursday");
//         break;
//         case'5':
//         alert("today is Friday");
//         break;
//         case'6':
//         alert("today is Saturday");
//         break;
//         case'7': 
//         alert("Today is Sunday"); 
//         break;
//         default:
//         alert("Number not between 1 and 7");

// }

let message = "";
let weekdayNumber = prompt("Enter numeric number between 1 and 7");
switch (weekdayNumber) {
    case '1':
        message = "Today is monday";
        break;
    case '2':
        message = "Today is Tuesday";
        break;
    case '3':
        message = "today is Wednesday";
        break;
    case '4':
        message = "today is Thursday";
        break;
    case '5':
        message = "today is Friday";
        break;
    case '6':
        message = "today is Saturday";
        break;
    case '7':
        message = "Today is Sunday";
        break;
    default:
        message = "Number not between 1 and 7";

}
console.log(message);