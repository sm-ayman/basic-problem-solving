const arr = [1, 3, 5, 3, 7, 1];

const seen = new Set();
const duplicates = new Set();

for (let i = 0; i < arr.length; i++) {
  if (seen.has(arr[i])) {
    duplicates.add(arr[i]);
  } else {
    seen.add(arr[i]);
  }
}

console.log([...duplicates]);