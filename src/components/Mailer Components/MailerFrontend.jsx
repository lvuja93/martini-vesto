import React, { useState } from 'react';

function EmailForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3003/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Poruka je uspešno poslata!');
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
            className="w-full max-w-lg mx-auto p-4 sm:p-6 bg-gray-100 shadow-md rounded-lg"
            onSubmit={handleSubmit}
        >
            {/* Polje za ime */}
            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm sm:text-lg font-medium text-gray-700"
                >

                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Ime"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 px-4 text-sm sm:text-lg rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
            </div>

            {/* Polje za email */}
            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm sm:text-lg font-medium text-gray-700"
                >

                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 px-4 text-sm sm:text-lg rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
            </div>

            {/* Polje za broj telefona */}
            <div className="mb-4">
                <label
                    htmlFor="phone"
                    className="block text-sm sm:text-lg font-medium text-gray-700"
                >

                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 px-4 text-sm sm:text-lg rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
            </div>

            {/* Polje za datum */}
            <div className="mb-4">
                <label
                    htmlFor="date"
                    className="block text-sm sm:text-lg font-medium text-gray-700"
                >

                </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Unesite datum"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-12 px-4 text-sm sm:text-lg rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white"
                />
            </div>

            {/* Polje za poruku */}
            <div className="mb-4">
                <label
                    htmlFor="message"
                    className="block text-sm sm:text-lg font-medium text-gray-700"
                >

                </label>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Poruka"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full h-32 px-4 py-2 text-sm sm:text-lg rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white resize-none"
                />
            </div>

            <button
                type="submit"
                className="w-full h-12 bg-gray-500 text-white text-sm sm:text-lg font-semibold rounded-lg shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Pošalji
            </button>
        </form>
    );
}

export default EmailForm;
