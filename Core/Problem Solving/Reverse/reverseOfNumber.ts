// const reverse = (number) => +number.toString().split("").reverse().join("");

const reverseRevursively = (num: number, str: string = ""): string => num ? reverseRevursively(Math.floor(num / 10), str += num % 10) : str;

console.log(reverseRevursively(1234));