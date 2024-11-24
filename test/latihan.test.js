describe("Additional Latihan Tests", () => {
    it("should return true for a truthy value", () => {
      expect(1).toBeTruthy();
    });
  
    it("should return false for a falsy value", () => {
      expect(0).toBeFalsy();
    });
  
    it("should correctly compare two strings", () => {
      expect("hello").toBe("hello");
    });
  
    it("should correctly compare two arrays", () => {
      expect([1, 2, 3]).toEqual([1, 2, 3]);
    });
  
    it("should correctly check if an array contains a value", () => {
      expect([1, 2, 3]).toContain(2);
    });
  
    it("should check if a number is greater than another", () => {
      expect(10).toBeGreaterThan(5);
    });
  
    it("should check if a number is less than another", () => {
      expect(5).toBeLessThan(10);
    });
  });
  