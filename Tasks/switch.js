// let a = +prompt('a?', '');

// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert('2,3');
// }

// rewrite the code below using a single switch statement

// let a = +prompt("value");
let a = prompt("value");

switch (a) {
    case null:

    case "":
        alert("null");
        break;

    case 0:
        alert("0");
        break;

    case 1:
        alert("1");
        break;

    case 2:
    case 3:
        alert("2,3");
        break;

    default:
        alert("unknown");
}