export const Model = ({ open, onclose, children }) => {
    if (!open) return null; // Prevent rendering when the modal is closed

    return (
        <div
            onClick={onclose}
            className={`fixed inset-0 flex justify-center items-center transition-colors duration-500 ${
                open ? "visible bg-black/50" : "invisible"
            }`}
            style={{ zIndex: 1000 }} 
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full
                    animate-glow border-2 border-transparent bg-gradient-to-b bg-black`}
            >
                <button
                    onClick={onclose}
                    className="absolute top-2 right-2 p-1 rounded-lg "
                >
                    X
                </button>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};
