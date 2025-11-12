function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// Test cases
console.log(reverseString("hello"));      // "olleh"
console.log(reverseString("recursion"));  // "noisrucer"
console.log(reverseString("a"));          // "a"
console.log(reverseString(""));           // ""