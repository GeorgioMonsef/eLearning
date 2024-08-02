import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

function Payment() {
    const [expiryDate, setExpiryDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardCVC, setCardCVC] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    return (
        <div className="bg-blue-500 h-screen flex justify-center items-center">
            <div className="max-w-md w-full p-6 bg-gray-100 shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-center mb-6">Payment Information</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Cardholder's Name</label>
                        <input
                            type="text"
                            id="cardName"
                            name="cardName"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter cardholder's name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter card number"
                            required
                        />
                    </div>
                    <div className="flex gap-4">
                        <div className="w-1/2">
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <DatePicker
                                selected={expiryDate}
                                onChange={(date) => setExpiryDate(date)}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholderText="Select expiry date"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="cardCVC" className="block text-sm font-medium text-gray-700">CVC</label>
                            <input
                                type="text"
                                id="cardCVC"
                                name="cardCVC"
                                value={cardCVC}
                                onChange={(e) => setCardCVC(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="Enter CVC"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">Billing Address</label>
                        <input
                            type="text"
                            id="billingAddress"
                            name="billingAddress"
                            value={billingAddress}
                            onChange={(e) => setBillingAddress(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter billing address"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter zip code"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="billingCycle" className="block text-sm font-medium text-gray-700">Billing Cycle</label>
                        <select
                            id="billingCycle"
                            name="billingCycle"
                            value={billingCycle}
                            onChange={(e) => setBillingCycle(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="annually">Annually</option>
                        </select>
                    </div>
                    <div className="flex justify-end">
                        <Link
                            to="/PaymentConfirmation"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
                        >
                            Done
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Payment;
