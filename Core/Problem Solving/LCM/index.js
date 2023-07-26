const gcd = (a, b) => (a ? gcd(b % a, a) : b);

/**
 * This will calculate the LCM of a given two numbers
 *
 * LCM can be calculated using this forumula.
 * a x b = lcm of (a & b) * gcd of (a & b)
 * basically, lcm of (a & b) = (a x b) / gcd of (a & b)
 */
const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(lcm(9, 12));
