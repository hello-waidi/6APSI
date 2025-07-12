import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);

        if (isNaN(num1) || isNaN(num2)) {
            alert("Please enter valid numbers");
            return;
        }

        let result = 0;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert("Cannot divide by zero");
                    return;
                }
                break;
            default:
                break;
        }

        setResult(result);
    };

    return (
        <div>
            <h1> React Calculator </h1>

            <div>
                <input
                    type="number"
                    placeholder="First Number"
                    value={n1}
                    onChange={(e) => setN1(e.target.value)}
                />
            </div>

            <div>
                <select value={operator} onChange={(e) => setOperator(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">×</option>
                    <option value="/">÷</option>
                </select>
            </div>

            <div>
                <input
                    type="number"
                    placeholder="Second Number"
                    value={n2}
                    onChange={(e) => setN2(e.target.value)}
                />
            </div>

            <button onClick={calculate}>Calculate</button>

            {result !== null && !isNaN(result) && <div>Result: {result}</div>}
        </div>
    );
}

export default Calculator;