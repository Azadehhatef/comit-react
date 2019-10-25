let officeHour = prompt("enter the current hour(out of 0-23)", 0);
if (officeHour < 0 || officeHour > 23) {
    alert("Sorry! you entered wrong number");
}

else if (officeHour < 8 || officeHour >= 18) {

    alert("Hour is outside of office hours");
}
else if (officeHour >= 8 && officeHour < 18) {
    alert("Welcome! we are open");
}