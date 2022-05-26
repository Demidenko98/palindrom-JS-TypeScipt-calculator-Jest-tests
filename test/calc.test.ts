import { Calculator } from '../src/Calculator'

describe("test calc functions", () => {
    it("should return 6 for add(2,4)", () => {
        let actualResult = new Calculator().MathOperation(2, 4, '+');
        expect(actualResult).toBe(6);
    });
    it("should return 8 for substarction(10,2)", () => {
        let actualResult = new Calculator().MathOperation(10, 2, '-');
        expect(actualResult).toBe(8);
    });
    it("should return 4 for multiplying(2,2)", () => {
        let actualResult = new Calculator().MathOperation(2, 2, '*');
        expect(actualResult).toBe(4);
    });
    it("should return 5 for dividing(20,4)", () => {
        let actualResult = new Calculator().MathOperation(20, 4, '/');
        expect(actualResult).toBe(5);
    });
    it("should return -Infinity for dividing(2,0)", () => {
        let actualResult = new Calculator().MathOperation(2, 0, '/');
        expect(actualResult).toBe(-Infinity);
    });
});