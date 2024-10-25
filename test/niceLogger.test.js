// Test file naming convention --> filename.test.js

const { niceLogger } = require("../src/niceLogger.js");

test("niceLogger returns Hello World", () => {
    // Test happens here
    // expect(sth).toBe(sth);

    // Lets make a test
    expect(niceLogger()).toBe("Hello World.");
});