import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function ResetPassword() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token') || '';

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [status, setStatus] = useState('');

    const { fetchNow, loading, error, data } = useFetch('auth/password-reset-confirm/', null, false);

    useEffect(() => {
        if (error) {
            setStatus(typeof error === 'string' ? error : JSON.stringify(error));
        }
        if (data && !error) {
            setStatus('Password successfully updated. You can log in now.');
            setNewPassword('');
            setConfirmPassword('');
        }
    }, [error, data]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newPassword || !confirmPassword) {
            setStatus('Please fill in both fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setStatus('Passwords do not match.');
            return;
        }

        if (!token) {
            setStatus('Invalid or missing token.');
            return;
        }

        setStatus('');
        try {
            await fetchNow(
                'auth/password-reset-confirm/',
                { token, new_password: newPassword, confirm_password: confirmPassword },
                'POST'
            );
        } catch {
            alert('An error has occurred, please try again later.')
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Change Password
                </h2>

                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 font-medium text-gray-700" htmlFor="newPassword">
                        New Password
                    </label>
                    <input
                        id="newPassword"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <label className="block mb-2 font-medium text-gray-700" htmlFor="confirmPassword">
                        Confirm New Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 disabled:opacity-50"
                    >
                        {loading ? 'Changing...' : 'Change Password'}
                    </button>
                </form>

                {status && (
                    <p
                        className={`mt-4 text-center text-sm ${status.toLowerCase().includes('error') ? 'text-red-500' : 'text-green-500'
                            }`}
                    >
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ResetPassword;
