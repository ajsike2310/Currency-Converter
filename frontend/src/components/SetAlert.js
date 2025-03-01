import React, { useState } from 'react';
import axios from 'axios';

const SetAlert = () => {
    const [alertBase, setAlertBase] = useState('');
    const [alertTarget, setAlertTarget] = useState('');
    const [alertThreshold, setAlertThreshold] = useState('');

    const setRateAlert = async () => {
        try {
            await axios.post(`http://localhost:5000/set_alert`, {
                base: alertBase,
                target: alertTarget,
                threshold: alertThreshold
            });
            alert('Alert set successfully');
        } catch (error) {
            console.error('Error setting alert:', error);
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-violet-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6" style={{ width: '550px', height: '450px' }}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-purple-800">Set Rate Alert</div>
                        <input
                            className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            value={alertBase}
                            onChange={(e) => setAlertBase(e.target.value)}
                            placeholder="Base Currency"
                        /><br /><br />
                        <input
                            className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            value={alertTarget}
                            onChange={(e) => setAlertTarget(e.target.value)}
                            placeholder="Target Currency"
                        /><br /><br />
                        <input
                            className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="number"
                            value={alertThreshold}
                            onChange={(e) => setAlertThreshold(e.target.value)}
                            placeholder="Threshold Rate"
                        /><br /><br />
                        <button
                            className="text-yellow-500 bg-black p-2 rounded-lg w-full hover:bg-gray-800"
                            onClick={setRateAlert}
                        >
                            Set Alert
                        </button><br /><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetAlert;
