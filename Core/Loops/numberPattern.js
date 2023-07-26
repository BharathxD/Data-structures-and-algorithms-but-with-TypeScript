function left(n) {
  for (let i = 1; i <= n; i++) {
    let number = "";
    const spaces = n - i;
    for (let l = 1; l <= spaces; l++) number += " ";
    for (let m = 1; m <= i; m++) number += String(m);
    let counter = i - 1;
    for (let r = 1; r <= i - 1; r++) {
      number += counter;
      counter--;
    }
    console.log(number);
  }
}

left(4);
