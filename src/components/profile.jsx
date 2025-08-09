
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { PencilSquareIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useFetch } from '../hooks/useFetch';

function Profile() {
    const { user, loginUser } = useAuth();
    const { data: cities = [], loading, error } = useFetch('cities/');

    const [activeTab, setActiveTab] = useState('profile');

    const accessToken = sessionStorage.getItem('access') || '';

    const { data: payments, loading: loadingPayments, error: errorPayments } = useFetch(
        'payments/',
        null,
        !!accessToken,
        accessToken
    );

    if (!user) return <div className="text-center mt-10">Loading profile...</div>;
    if (loading) return <div className="text-center mt-10">Loading cities...</div>;
    if (error) return <div className="text-center mt-10 text-red-600">Error loading cities</div>;

    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200">
                <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-4 py-2 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                >
                    Profile
                </button>
                <button
                    onClick={() => setActiveTab('security')}
                    className={`px-4 py-2 font-medium ${activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                >
                    Security
                </button>
                <button
                    onClick={() => setActiveTab('payments')}
                    className={`px-4 py-2 font-medium ${activeTab === 'payments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                >
                    Payment History
                </button>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
                {activeTab === 'profile' && <ProfileSection user={user} cities={cities} loginUser={loginUser} />}
                {activeTab === 'security' && <SecuritySection />}
                {activeTab === 'payments' && <PaymentHistorySection payments={payments} loading={loadingPayments} error={errorPayments} />}
            </div>
        </div>
    );
}

const ProfileSection = ({ user, cities, loginUser }) => {
    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        street: '',
        zip_code: '',
        city: '',
    });

    const [original, setOriginal] = useState({});
    const [editingField, setEditingField] = useState(null);
    const [editingAddress, setEditingAddress] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (!user) return;

        const address = user.addresses?.[0] || {};
        const newForm = {
            first_name: user.first_name || '',
            last_name: user.last_name || '',
            email: user.email || '',
            phone_number: user.phone_number || '',
            street: address.street || '',
            zip_code: address.zip_code || '',
            city: address.city || '',
        };

        setForm(newForm);
        setOriginal(newForm);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFieldEdit = (field) => {
        setEditingField(field);
    };

    const handleCancelField = () => {
        setForm((prev) => ({ ...prev, [editingField]: original[editingField] }));
        setEditingField(null);
    };

    const handleSaveField = async () => {
        if (!editingField) return;
        setIsSaving(true);
        try {
            const payload = { [editingField]: form[editingField] };
            const URL = import.meta.env.VITE_API_HMCP + 'users/update_profile/';
            const res = await fetch(URL, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('access') || ''}`,
                },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Error updating field');
            const updated = await res.json();
            loginUser((prev) => ({ ...prev, ...updated }));
            setOriginal((prev) => ({ ...prev, [editingField]: form[editingField] }));
            setEditingField(null);
        } catch (error) {
            console.error('Failed to save:', error);
            alert('Error saving changes');
        } finally {
            setIsSaving(false);
        }
    };

    const handleEditAddress = () => {
        setEditingAddress(true);
    };

    const handleCancelAddress = () => {
        setForm((prev) => ({
            ...prev,
            street: original.street,
            zip_code: original.zip_code,
            city: original.city,
        }));
        setEditingAddress(false);
    };

    const handleSaveAddress = async () => {
        setIsSaving(true);
        try {
            const payload = {
                addresses: [{
                    id: user.addresses?.[0]?.id || null,
                    street: form.street,
                    zip_code: form.zip_code,
                    city: form.city,
                }],
            };
            const URL = import.meta.env.VITE_API_HMCP + 'users/update_profile/';
            const res = await fetch(URL, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem('access') || ''}`,
                },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error('Error updating address');
            const updated = await res.json();
            loginUser((prev) => ({ ...prev, ...updated }));
            setOriginal((prev) => ({
                ...prev,
                street: form.street,
                zip_code: form.zip_code,
                city: form.city,
            }));
            setEditingAddress(false);
        } catch (error) {
            alert('Error saving address');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">Profile Information</h2>

            <div className="mb-8">
                <FieldEditor
                    label="First Name"
                    name="first_name"
                    value={form.first_name}
                    editingField={editingField}
                    onEdit={handleFieldEdit}
                    onChange={handleChange}
                    onCancel={handleCancelField}
                    onSave={handleSaveField}
                    isSaving={isSaving}
                />
                <FieldEditor
                    label="Last Name"
                    name="last_name"
                    value={form.last_name}
                    editingField={editingField}
                    onEdit={handleFieldEdit}
                    onChange={handleChange}
                    onCancel={handleCancelField}
                    onSave={handleSaveField}
                    isSaving={isSaving}
                />
                <FieldEditor
                    label="Email"
                    name="email"
                    value={form.email}
                    editingField={editingField}
                    onEdit={handleFieldEdit}
                    onChange={handleChange}
                    onCancel={handleCancelField}
                    onSave={handleSaveField}
                    isSaving={isSaving}
                />
                <FieldEditor
                    label="Phone"
                    name="phone_number"
                    value={form.phone_number}
                    editingField={editingField}
                    onEdit={handleFieldEdit}
                    onChange={handleChange}
                    onCancel={handleCancelField}
                    onSave={handleSaveField}
                    isSaving={isSaving}
                />
            </div>

            <div>
                <h3 className="text-xl font-semibold text-[#1F7A8C] mb-2">Address</h3>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-700">Street</label>
                    <input
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                        readOnly={!editingAddress}
                        className="w-full rounded-md border px-3 py-2 text-sm bg-white border-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-700">Zip Code</label>
                    <input
                        name="zip_code"
                        value={form.zip_code}
                        onChange={handleChange}
                        readOnly={!editingAddress}
                        className="w-full rounded-md border px-3 py-2 text-sm bg-white border-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-xs font-medium text-gray-700">City</label>
                    <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        disabled={!editingAddress}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white"
                    >
                        <option value="">Select city</option>
                        {cities.map((c) => (
                            <option key={c.id} value={c.id}>
                                {c.city_name}
                            </option>
                        ))}
                    </select>
                </div>

                {!editingAddress ? (
                    <button
                        onClick={handleEditAddress}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Edit Address
                    </button>
                ) : (
                    <div className="flex gap-2">
                        <button
                            onClick={handleSaveAddress}
                            disabled={isSaving}
                            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                        >
                            {isSaving ? 'Saving...' : 'Save Address'}
                        </button>
                        <button
                            onClick={handleCancelAddress}
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const SecuritySection = () => {
    const [showChangePass, setShowChangePass] = useState(false);
    const [passForm, setPassForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [passError, setPassError] = useState('');
    const [passSaving, setPassSaving] = useState(false);

    const handlePassChange = (e) => {
        const { name, value } = e.target;
        setPassForm((prev) => ({ ...prev, [name]: value }));
        setPassError('');
    };

    const handleToggleChangePass = () => {
        setShowChangePass((prev) => !prev);
        setPassError('');
        setPassForm({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        });
    };

    const handleSavePassword = async () => {
        const payload = {
            old_password: passForm.currentPassword,
            new_password: passForm.newPassword,
            confirm_password: passForm.confirmPassword,
        };
        console.log('Password payload to send:', payload);
        const URL = import.meta.env.VITE_API_HMCP + 'users/change_password/';
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${sessionStorage.getItem('access') || ''}`,
            },
            body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error('Error updating password');
        alert('Password updated successfully');
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">Security</h2>
            {!showChangePass ? (
                <button
                    onClick={handleToggleChangePass}
                    className="bg-[#1F7A8C] text-white py-2 px-4 rounded-md hover:bg-[#1F7A8C]/90"
                >
                    Change Password
                </button>
            ) : (
                <div className="space-y-4 max-w-md">
                    <label className="block text-xs font-medium text-gray-700 mb-1">Current Password</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={passForm.currentPassword}
                        onChange={handlePassChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 mb-3 text-sm"
                    />

                    <label className="block text-xs font-medium text-gray-700 mb-1">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={passForm.newPassword}
                        onChange={handlePassChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 mb-3 text-sm"
                    />

                    <label className="block text-xs font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={passForm.confirmPassword}
                        onChange={handlePassChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 mb-3 text-sm"
                    />

                    {passError && <p className="text-red-600 text-sm mb-2">{passError}</p>}

                    <button
                        onClick={handleSavePassword}
                        disabled={passSaving}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
                    >
                        {passSaving ? 'Saving...' : 'Save New Password'}
                    </button>
                </div>
            )}
        </div>
    );
};

const PaymentHistorySection = ({ payments, loading, error }) => {
    const [expandedRow, setExpandedRow] = useState(null);
    const [orderDetails, setOrderDetails] = useState({});

    const { fetchNow } = useFetch(
        "orders/",  // base URL
        null,       // postData
        false,      // autoFetch
        sessionStorage.getItem("access") // token
    );

    const toggleRow = async (orderId) => {
        if (expandedRow === orderId) {
            setExpandedRow(null);
        } else {
            if (!orderDetails[orderId]) {
                try {
                    const data = await fetchNow(`orders/${orderId}`, null, "GET");
                    setOrderDetails((prev) => ({ ...prev, [orderId]: data }));
                } catch (err) {
                    console.error("Error loading order:", err);
                }
            }
            setExpandedRow(orderId);
        }
    };

    return (
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-[#1F7A8C] mb-4">Payment History</h2>

            {loading && <p className="text-gray-500">Loading payments...</p>}
            {error && <p className="text-red-500">Error loading payments.</p>}
            {!loading && !error && payments?.length === 0 && (
                <p className="text-gray-700">No payments found.</p>
            )}

            {!loading && !error && payments?.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-gradient-to-r from-blue-50 to-cyan-50">
                            <tr>
                                {/* <th className="px-4 py-2 border-b text-left text-gray-600">Payment No.</th> */}
                                <th className="px-4 py-2 border-b text-left text-gray-600">Amount</th>
                                <th className="px-4 py-2 border-b text-left text-gray-600">Status</th>
                                <th className="px-4 py-2 border-b text-left text-gray-600">Date</th>
                                <th className="px-4 py-2 border-b text-left text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment) => (
                                <React.Fragment key={payment.paypal_payment_id}>
                                    <tr className="hover:bg-gray-100 transition-colors">
                                        {/* <td className="px-4 py-2 border-b">{payment.paypal_payment_id}</td> */}
                                        <td className="px-4 py-2 border-b">${parseFloat(payment.amount).toFixed(2)}</td>
                                        <td className="px-4 py-2 border-b capitalize">
                                            <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${
                                                payment.status === 'completed' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : payment.status === 'pending' 
                                                        ? 'bg-yellow-100 text-yellow-800' 
                                                        : 'bg-red-100 text-red-800'
                                            }`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2 border-b">{new Date(payment.created_at).toLocaleString()}</td>
                                        <td className="px-4 py-2 border-b">
                                            <button
                                                onClick={() => toggleRow(payment.order)}
                                                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                                            >
                                                {expandedRow === payment.order ? "Close" : "View Details"}
                                            </button>
                                        </td>
                                    </tr>

                                    {expandedRow === payment.order && orderDetails[payment.order] && (
                                        <tr>
                                            <td colSpan={5} className="bg-gray-50 p-4">
                                                <div>
                                                    <p>
                                                        <strong>Delivery Date:</strong> {orderDetails[payment.order].delivery_date}
                                                    </p>
                                                    <p>
                                                        <strong>Shipping Status:</strong> {orderDetails[payment.order].shipping_status}
                                                    </p>
                                                    <h4 className="mt-2 font-semibold">Products:</h4>
                                                    <ul className="list-disc ml-5">
                                                        {orderDetails[payment.order].cart_items.map((item) => (
                                                            <li key={item.cart_item_id}>
                                                                Product #{item.product} - Quantity: {item.quantity} - Price: ${parseFloat(item.unit_price).toFixed(2)}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

function FieldEditor({ label, name, value, editingField, onEdit, onChange, onCancel, onSave, isSaving }) {
    const isEditing = editingField === name;
    return (
        <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">{label}</label>
            <div className="relative flex items-center gap-2">
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    readOnly={!isEditing}
                    className={`w-full rounded-md border px-3 py-2 text-sm ${isEditing ? 'border-indigo-600' : 'border-gray-300'} bg-white`}
                />
                {isEditing ? (
                    <div className="flex gap-1">
                        <button
                            onClick={onSave}
                            disabled={isSaving}
                            aria-label={`Save ${label}`}
                            className="p-1 rounded bg-green-100 hover:bg-green-200"
                        >
                            <CheckIcon className="h-5 w-5 text-green-600" />
                        </button>
                        <button
                            onClick={onCancel}
                            aria-label={`Cancel editing ${label}`}
                            className="p-1 rounded bg-red-100 hover:bg-red-200"
                        >
                            <XMarkIcon className="h-5 w-5 text-red-600" />
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => onEdit(name)}
                        aria-label={`Edit ${label}`}
                        className="p-1 rounded hover:bg-gray-100"
                    >
                        <PencilSquareIcon className="h-5 w-5 text-gray-500" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Profile;
