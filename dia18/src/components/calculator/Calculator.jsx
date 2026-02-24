import { useState, useEffect } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operation, setOperation] = useState('add');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);
    
    const handleCalculate = () => {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        let res;
        
        switch (operation) {
            case 'add':
                res = number1 + number2;
                break;
            case 'subtract':
                res = number1 - number2;
                break;
            case 'multiply':
                res = number1 * number2;
                break;
            case 'divide':
                res = number2 !== 0 ? number1 / number2 : 'Error: Division by zero';
                break;
            default:
                res = 'Invalid operation';
        }
        setResult(res);
        setHistory(prev => [...prev, { num1, num2, operation, result: res }]);
    };

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="num1">
                        Number 1
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="num1" type="number" placeholder="Enter first number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="num2">
                        Number 2
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="num2" type="number" placeholder="Enter second number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="operation">
                        Operation
                    </label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="operation" value={operation} onChange={(e) => setOperation(e.target.value)}>
                        <option value="add">Add</option>
                        <option value="subtract">Subtract</option>
                        <option value="multiply">Multiply</option>
                        <option value="divide">Divide</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCalculate}>
                        Calculate
                    </button>
                </div>
            </form>
            {result !== null && (
                <div className="bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py-3" role="alert">
                    <p className="font-bold">Result: {result}</p>
                </div>
            )}
            {history.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-bold mb-2">Calculation History</h3>
                    <ul className="list-disc pl-5">
                        {history.map((item, index) => (
                            <li key={index}>{item.num1} {item.operation} {item.num2} = {item.result}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Calculator;