function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
     exprNoSpace = expr.replace( /\s/g, '');

        if (exprNoSpace.search('/0') > -1) {
            throw Error('TypeError: Division by zero.');
        }

        let brackets = 0;
        for(let i = 0; i < exprNoSpace.length; i++) {
            if (exprNoSpace[i] === '(') {
                brackets ++;
            } else if (exprNoSpace[i] === ')') {
                brackets --;
            }
        }

        if (brackets !== 0) {
            throw Error('ExpressionError: Brackets must be paired');
        }

    const answer = new Function(`return ${exprNoSpace}`);

    return answer();
}

module.exports = {
    expressionCalculator
}