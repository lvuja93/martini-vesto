import React, { useEffect, useState } from "react";

const Toast = ({ message, onClose, duration = 3000 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show the toast
        setVisible(true);

        // Set a timer to close the toast after the specified duration
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 500); // Allow animation to complete before removing
        }, duration);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [onClose, duration]);

    return (
        <div
            className={`fixed bottom-5 right-5 z-50 mr-4 max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-500 ease-in-out transform ${visible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
                }`}
            role="alert"
            aria-live="assertive"
        >
            <div className="flex items-center bg-[#f5821f] text-white rounded-lg shadow-lg overflow-hidden">
                {/* Icon */}

                {/* Message */}
                <div className="flex-1 px-4 py-2 font-mono text-base sm:text-lg">
                    {message}
                </div>
                {/* Close Button */}
                <button
                    onClick={() => {
                        setVisible(false);
                        setTimeout(onClose, 500); // Smooth exit
                    }}
                    className="p-2 text-white hover:bg-white hover:text-[#f5821f] transition-colors duration-300 focus:outline-none"
                >
                    ✕
                </button>
            </div>
        </div >
    );
};

export default Toast;
