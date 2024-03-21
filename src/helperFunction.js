export default function factorialRecursive(num) {
  // Base case: factorial of 0 or 1 is 1
  if (num === 0 || num === 1) {
    return 1;
  } else {
    // Recursive case: num * factorial of (num - 1)
    return num * factorialRecursive(num - 1);
  }
}
