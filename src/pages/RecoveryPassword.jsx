import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

function RecoveryPassword() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // success or error message
    const [loading, setLoading] = useState(false);

    const { fetchNow, error, data } = useFetch('auth/recovery-password/', null, false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setStatus('Please enter a valid email.');
            return;
        }

        setLoading(true);
        setStatus('');

        try {
            // API to recover password
            await fetchNow('auth/password-recovery/', { email }, 'POST');

            setStatus('Recovery email sent. Please check your inbox.');
            setEmail('');
        } catch (error) {
            setStatus(error.message || 'Unexpected error.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full bg-white p-8 border border-gray-200 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recover Password</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                    >
                        {loading ? 'Sending...' : 'Send Recovery Email'}
                    </button>
                </form>

                {status && (
                    <p className={`mt-4 text-center text-sm ${status.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
}

export default RecoveryPassword;
