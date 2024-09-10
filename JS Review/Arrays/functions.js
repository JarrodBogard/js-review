// Method Reviews:
// Some: Returns true if it finds an element for which the provided function returns true; it doesn't modify the array.
// NOTES: some() does not mutate the array on which it is called, but the function provided as callbackFn can. The length of the array is saved before the first invocation of callbackFn. Therefore: callbackFn will not visit any elements added beyond the array's initial length when the call to some() began. Changes to already-visited indexes do not cause callbackFn to be invoked on them again. If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited. some() will not run its predicate on empty slots.

const someArray = [1, 2, 3, 4, 5];

const callBackFn = (x) => x === 4;
const isNumPresent = someArray.some(callBackFn);

console.log(isNumPresent);

// ----------------------------------------------------- //

const someArray2 = [1, 10, 0, 5, 8];

function callBackFn2(element, index, array) {
  return element > 10;
}

const isBiggerThan10 = someArray2.some(callBackFn2);
console.log(isBiggerThan10);

// ----------------------------------------------------- //

const someArray3 = ["barley", "wheat", "rye"];

function checkAvailibity(array, value) {
  return array.some((arrayValue) => arrayValue === value);
}

console.log(checkAvailibity(someArray3, "wheat"));
console.log(checkAvailibity(someArray3, "rice"));

// ----------------------------------------------------- //

const someArray4 = ["true", "bool", 1, 4];

const getBoolean = (value) => {
  if (typeof value === "string") {
    value = value.toLowerCase().trim();
  }

  return someArray4.some((arrayValue) => arrayValue === value);
};

console.log(getBoolean("true"));
console.log(getBoolean(3));
console.log(getBoolean(4));

// ----------------------------------------------------- //

const someArray5 = [3, -1, 1, 4, 1, 5];
const someArray6 = [1, -1, 2, 4, 7, 10];
const someArray7 = [1, -1, 4, 5, -4, 7, 2, 8, 10];

const isIncreasing = !someArray7
  .filter((arrayValue) => arrayValue > 0)
  .some((element, index, array) => {
    console.log(element, index);
    if (index === 0) return false;
    return element <= array[index - 1];
  });

console.log(isIncreasing);

// Every:
// Find:
// Splice:
// Slice:
// Sort:
// IndexOf:
