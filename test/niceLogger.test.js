// Test file naming convention --> filename.test.js

const { niceLogger } = require("../src/niceLogger.js");

describe("niceLogger Function Tests", () => {

    // different test cases
    test("niceLogger returns Hello World", () => {
        // Test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        expect(niceLogger()).toBe("Hello World.");
    });

    test("niceLogger returns Hello World", () => {
        // Test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        expect(niceLogger()).toBe("Hello World.");
    });

    test("niceLogger returns Hello World", () => {
        // Test happens here
        // expect(sth).toBe(sth);
    
        // Lets make a test
        expect(niceLogger()).toBe("Hello World.");
    });
});

describe("messageRepeater Function tests", () => {
    
    test("messageRepeater repeats words correctly", () => {

    });

    test("messageRepeater repeats numbers correctly", () => {

    });

    // .skip to skip test (to do in future)
    test.skip("messageRepeater repeats arrays correctly", () => {

    });
})