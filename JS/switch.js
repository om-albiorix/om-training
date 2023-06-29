const fruits = 'Papayas';
switch (fruits) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${fruits}.`);
}

// if you change the value of expr like you changes "Oranges" and at thst time your switch are break at oranges
let x = 5;

switch (x) {
  case 3:
    alert('Too small');
    break;
  case 4:
    alert('Exactly!');
    break;
  case 5:
    alert('Too big');
    break;
  default:
    alert("I don't know such values");
}
