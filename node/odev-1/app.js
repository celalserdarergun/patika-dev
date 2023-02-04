const input = process.argv[2];
const radius = parseInt(input);
const area = Math.PI * (radius * radius);
console.log(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);