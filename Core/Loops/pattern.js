function upper(n) {
  for (let i = 0; i < n / 2; i++) {
    let stars = "";
    let leftStars = i;
    for (let l = 0; l < leftStars; l++) {
      stars += "*";
    }
    const spaces = n - 2 * i;
    for (let m = 0; m < spaces; m++) {
      stars += " ";
    }
    let rightStars = i;
    for (let l = 0; l < rightStars; l++) {
      stars += "*";
    }
    console.log(stars);
  }
}

function middle(n) {
  let stars = "";
  for (let i = 0; i < n; i++) {
    stars += "*";
  }
  console.log(stars);
}

function lower(n) {
  for (let i = 0; i < n / 2; i++) {
    let stars = "";
    const leftStars = Math.floor(n / 2) - i;
    for (let l = 0; l < leftStars; l++) {
      stars += "*";
    }
    let spaces = 2 * i + 1;
    for (let m = 0; m < spaces; m++) {
      stars += " ";
    }
    const rightStars = Math.floor(n / 2) - i;
    for (let r = 0; r < rightStars; r++) {
      stars += "*";
    }
    console.log(stars);
  }
}

function main(n) {
  if (n % 2 === 0) return console.log("Only odd numbers are accepted");
  upper(n);
  middle(n);
  lower(n);
}

main(11);

/*

 *         *
 **       **
 ***     ***
 ****   ****
 ***** *****
 ***********
 ***** *****
 ****   ****
 ***     ***
 **       **
 *         *
 
*/
