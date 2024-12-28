import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dash() {
    const navigate = useNavigate()
    const [recentActivities, setRecentActivities] = useState([]);
    const [storageStats, setStorageStats] = useState({ used: 15, total: 100 });

    useEffect(() => {
        const dummyActivities = [
            { description: 'Uploaded file: project_report.pdf', timestamp: '2024-12-20 10:30 AM' },
            { description: 'Shared file: client_docs.zip', timestamp: '2024-12-19 5:00 PM' },
            { description: 'Downloaded file: meeting_notes.docx', timestamp: '2024-12-19 2:45 PM' },
        ];
        setRecentActivities(dummyActivities);
    }, []);

    return (
        <div className="font-Inter min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
            <header className="bg-blue-500 text-white py-4 shadow-md">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <h1 className="text-base"><p class="text-2xl text-white font-semibold capitalize">
                        Sharify
                    </p>Secure File Sharing</h1>
                    <div class="flex flex-wrap items-center cursor-pointer">
                        <img
                            src="https://readymadeui.com/team-2.webp"
                            class="w-10 h-10 rounded-full border-2 border-white"
                        />
                        <div class="ml-4">
                            <p class="text-sm text-white font-semibold">
                                Admin
                            </p>
                            <p class="text-xs text-gray-200 mt-0.5">
                                Silver Plan
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto p-6">
                <section className="mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Storage Usage</h2>
                    <div className="w-full bg-gray-300 rounded-full h-4">
                        <div
                            className="bg-blue-500 h-4 rounded-full"
                            style={{
                                width: `${(storageStats.used / storageStats.total) * 100}%`,
                            }}
                        ></div>
                    </div>
                    <p className="text-sm mt-2 text-gray-600">
                        {storageStats.used} GB of {storageStats.total} GB used
                    </p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
                    <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
                        {recentActivities.length > 0 ? (
                            recentActivities.map((activity, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-3 flex justify-between items-center hover:bg-gray-50"
                                >
                                    <span className="text-gray-800">{activity.description}</span>
                                    <span className="text-sm text-gray-500">
                                        {activity.timestamp}
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-3 text-gray-500 text-center">
                                No recent activities
                            </li>
                        )}
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <button
                            onClick={() => {
                                navigate('/share')
                            }}
                            className="bg-green-500 text-white px-6 py-4 rounded-lg shadow hover:bg-green-600">
                            Share a File
                        </button>
                        <button className="bg-blue-500 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-600">
                            Manage Files
                        </button>
                        <button className="bg-red-500 text-white px-6 py-4 rounded-lg shadow hover:bg-red-600">
                            View Access Logs
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
