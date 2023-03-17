// const { isHomographAttack, cleanUri } = require("./homograph");

// test("detects homograph attack", () => {
//   expect(isHomographAttack("https://www.example.com")).toBe(false);
//   expect(isHomographAttack("https://www.ехаmрӏе.com")).toBe(true);
//   expect(isHomographAttack("https://www.gooɡle.com")).toBe(true);
// });

// test("cleans URIs", () => {
//   expect(cleanUri("https://www.example.com")).toBe("https://www.example.com");
//   expect(cleanUri("https://www.ехаmрӏе.com")).toBe("https://www.example.com");
//   expect(cleanUri("https://www.gooɡle.com")).toBe("https://www.google.com");
// });