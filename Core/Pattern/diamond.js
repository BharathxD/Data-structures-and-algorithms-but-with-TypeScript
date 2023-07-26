const upper = (n) => {
  // After that start printing the number that is corresponding to the row number, x -> n, space separated
  //
  for (let row = 1; row <= n; row++) {
    let spaces = row - 1;
    let str = "";
    // For every row print x-1 spaces
    for (let i = 0; i < spaces; i++) {
      str += " ";
    }
    let num = row;
    while (num <= n) {
      str += num + " ";
      num++;
    }
    console.log(str);
  }
};

const lower = (n) => {
  for (let row = 2; row <= n; row++) {
    let spaces = n - row;
    let str = "";
    // For every row print x-1 spaces
    for (let i = 0; i < spaces; i++) {
      str += " ";
    }
    let num = n - row + 1;
    while (num <= n) {
      str += num + " ";
      num++; 
    }
    console.log(str);
  }
};

upper(7);
lower(7);
