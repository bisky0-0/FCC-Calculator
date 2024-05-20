export function evaluateExpression(expression) {
    console.log('Expression:', expression);
    if (expression != null) {
        const tokens = expression.match(/\d+|\+|\-|\*|\//g);

        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
        };

        const applyOperation = (stack, operator) => {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch (operator) {
                case '+':
                    return operand1 + operand2;
                case '-':
                    return operand1 - operand2;
                case '*':
                    return operand1 * operand2;
                case '/':
                    if (operand2 === 0) {
                        throw new Error('Division by zero');
                    }
                    return operand1 / operand2;
                default:
                    throw new Error('Invalid operator');
            }
        };

        const outputQueue = [];
        const operatorStack = [];

        tokens.forEach(token => {
            if (/\d+/.test(token)) {
                outputQueue.push(parseFloat(token));
            } else if (['+', '-', '*', '/'].includes(token)) {
                while (operatorStack.length > 0
                    && precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]) {

                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        });

        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop());
        }

        const stack = [];
        outputQueue.forEach(token => {
            if (typeof token === 'number') {
                stack.push(token);
            } else {
                const result = applyOperation(stack, token);
                stack.push(result);
            }
        });

        if (stack.length !== 1) {
            throw new Error('Invalid expression');
        }

        const result = stack[0];
        console.log('Result:', result);
        return result;
    }
}
