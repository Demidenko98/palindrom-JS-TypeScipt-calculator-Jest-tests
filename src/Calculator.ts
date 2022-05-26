export class Calculator {

    MathOperation(a: number, b: number, operation: string) {

        if (a == null || b == null) {
            return;
        }

        // if (operation === '+') {
        //     a + b;
        // }

        // else if (operation === '-') {
        //     a - b;
        // }

        // else if (operation === '*') {
        //     a * b;
        // }
        // else if (operation === '/') {
        //     if (b > 0)
        //         a / b;
        // }
        // else {
        //     return;
        // }
        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return (b > 0) ? a / b : -Infinity;
            default:
                return Infinity;
        }
    }


}


let calc = new Calculator();

console.log(calc.MathOperation(2, 2, "+"));