import React from 'react';

const Profile = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-violet-950 [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-6" style={{ width: '550px', height: '450px' }}>
                    <div className="px-6 py-4 text-center">
                        <img src="profile_photo_url" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <p className="text-gray-700 text-xl">Username: YourUsername</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
