let str = "  JavaScript World  ";

console.log("Original String:", str);

// 1. length
console.log("Length:", str.length);

// 2. toUpperCase
console.log("Uppercase:", str.toUpperCase());

// 3. toLowerCase
console.log("Lowercase:", str.toLowerCase());

// 4. trim
console.log("Trim:", str.trim());

// 5. indexOf
console.log("Index of 'Script':", str.indexOf("Script"));

// 6. charAt
console.log("Char at index 3:", str.charAt(3));

// 7. slice
console.log("Slice (2,10):", str.slice(2, 10));

// 8. substring
console.log("Substring (2,10):", str.substring(2, 10));

// 9. replace
console.log("Replace:", str.replace("JavaScript", "JS"));

// 10. includes
console.log("Includes 'World':", str.includes("World"));

// 11. startsWith
console.log("StartsWith '  Ja':", str.startsWith("  Ja"));

// 12. endsWith
console.log("EndsWith 'World  ':", str.endsWith("World  "));

// 13. split
let words = "a,b,c,d".split(",");
console.log("Split:", words);