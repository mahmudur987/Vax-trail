const input = [
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Mahmud", age: 31, temperature: 99 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Sabnaj", age: 51, temperature: 101 },
];

const vaxTrail = (data) => {
  let result = {};
  let A = [];
  let B = [];
  let C = [];
  let D = [];
  data.forEach((element) => {
    if (element.age >= 20 && element.age <= 30 && element.temperature < 100) {
      A.push(element);
    }
    if (element.age >= 31 && element.age <= 40 && element.temperature < 100) {
      B.push(element);
    }
    if (element.age >= 41 && element.age <= 50 && element.temperature < 100) {
      C.push(element);
    }
    if (element.temperature >= 100) {
      D.push(element);
    }
  });
  result.A = A;
  result.B = B;
  result.C = C;
  result.D = D;

  return result;
};

const output = vaxTrail(input);
console.log(output);
