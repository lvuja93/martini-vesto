import React, { useState } from 'react';
import Toast from '../Other Components/Toast';

function EmailForm1() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3004/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 7000);

                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                alert('Došlo je do greške prilikom slanja poruke.');
            }
        } catch (error) {
            console.error('Greška:', error);
            alert('Greška prilikom povezivanja sa serverom.');
        }
    };

    return (
        <form
            className="w-full max-w-xl mx-auto p-4 sm:p-6 bg-gray-200 shadow-md"
            onSubmit={handleSubmit}
        >
            {/* Name Field */}
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Ime"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 px-4 text-sm sm:text-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f5821f] focus:outline-none focus:border-[#f5821f] bg-white rounded-lg"
                />
            </div>

            {/* Email Field */}
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 px-4 text-sm sm:text-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f5821f] focus:outline-none focus:border-[#f5821f] bg-white rounded-lg"
                />
            </div>

            {/* Message Field */}
            <div className="mb-4">
                <textarea
                    name="message"
                    id="message"
                    placeholder="Poruka"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-32 px-4 py-2 text-sm sm:text-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#f5821f] focus:outline-none focus:border-[#f5821f] bg-white resize-none rounded-lg"
                />
            </div>

            <button
                type="submit"
                className="w-full h-12 bg-white text-black rounded-lg text-sm sm:text-lg font-semibold shadow-sm hover:bg-[#f5821f] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f5821f]"
            >
                Pošalji
            </button>
            {showToast && (
                <Toast
                    message="Hvala Vam na pitanju. Odgovorićemo Vam u najkraćem mogućem roku."
                    onClose={() => setShowToast(false)}
                />
            )}
        </form>
    );
}

export default EmailForm1;
