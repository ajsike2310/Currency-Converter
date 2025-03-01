import React, { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
    const [history, setHistory] = useState([]);

    const fetchHistory = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/history`);
            setHistory(response.data);
        } catch (error) {
            console.error('Error fetching history:', error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-violet-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6" style={{ width: '550px', height: '450px' }}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-purple-800">Conversion History</div>
                        <ol  className="text-gray-700 list-disc pl-5">
                            {history.map((entry, index) => (
                                <li key={index}>
                                 {entry.amount} {entry.base} to {entry.target} = {entry.converted_amount}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
