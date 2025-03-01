import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [base, setBase] = useState('');
    const [target, setTarget] = useState('');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);

    const convertCurrency = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/convert`, {
                params: { base, target, amount }
            });
            setResult(response.data.converted_amount);
        } catch (error) {
            console.error('Error converting currency:', error);
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-violet-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6" style={{ width: '550px', height: '450px' }}>
                    <div className="px-2 py-2">
                        <div className="font-bold text-xl mb-3 p-10 text-purple-800">Currency Converter</div>
                        <label htmlFor="base" className="mr-4 text-gray-700">Enter Currency</label>
                        <input
                            className="text-black rounded-md"
                            type="text"
                            value={base}
                            onChange={(e) => setBase(e.target.value)}
                            placeholder="Base Currency"
                        /><br /><br />
                        <label htmlFor="target" className="mr-4 text-gray-700">Enter Target Currency</label>
                        <input
                            className="text-black rounded-md"
                            type="text"
                            value={target}
                            onChange={(e) => setTarget(e.target.value)}
                            placeholder="Target Currency"
                        /><br /><br />
                        <label htmlFor="amount" className="mr-4 text-gray-700">Enter Amount</label>
                        <input
                            className="text-black rounded-md"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Amount"
                        /><br /><br />
                        <label htmlFor="convert" className="mr-3 text-gray-700">Click me</label>
                        <button
                            id="convert"
                            onClick={convertCurrency}
                            className="text-gray-700 bg-blue-500 p-2 rounded-md"
                        >
                            Convert
                        </button><br /><br />
                        {result && <p className="text-gray-700">Converted Amount: {result}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
